from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
from operator import and_
from functools import reduce
import numpy as np
import jieba

from scipy.spatial.distance import cosine

def distance(v1, v2): return cosine(v1, v2)

def cut(string): return ' '.join(jieba.cut(string))

def get_X(content_filepath):
    with open(content_filepath, 'rb') as f:
        news_content = pickle.load(f)
    X = vectorized.fit_transform(news_content)
    return X

def search_engine(query, content_filepath, news_add_opinion_filepath):
    global vectorized
    vectorized = TfidfVectorizer()

    # 得到tfidf矩阵
    X = get_X(content_filepath)
    transposed_x = X.transpose().toarray()

    words = cut(query).split()
    word_2_id = vectorized.vocabulary_
    if all([word in word_2_id for word in words]):
        candidates_ids = [word_2_id[w] for w in words]
    else:
        return []

    documents_ids = [
        set(np.where(transposed_x[_id])[0]) for _id in candidates_ids
    ]

    merged_documents = reduce(and_, documents_ids)
    # we could know the documents which contain these words
    query_vec = vectorized.transform([' '.join(words)]).toarray()[0]
    sorted_documents_id = sorted(merged_documents, key=lambda i: distance(query_vec, X[i].toarray()))

    with open(news_add_opinion_filepath, 'rb') as f:
        news_add_opinion = pickle.load(f)
    news_have_opinion = [news_add_opinion[id] for id in sorted_documents_id if news_add_opinion[id]['opinion'] != []]
    news_no_opinion = [news_add_opinion[id] for id in sorted_documents_id if news_add_opinion[id]['opinion'] == []]
    search_result = news_have_opinion + news_no_opinion
    return search_result

if __name__ == '__main__':
    # 输入：关键字，content文件目录，news_add_opinion文件目录
    # 输出：按照tfidf及有无观点提取的新闻排名，如果没有返回None
    search_result = search_engine('文化部门 基础设施', './news_civilization_content.pk', './news_civilization_add_opinion.pk')
    print(search_result)