# -*- coding: utf-8 -*-
from bottle import *
import json, pickle
from collections import defaultdict
from TextRank import  get_summarization_by_textrank
from Naive_Sent_Vec import  get_summarization_by_naive_sentvec
from Word2Vec_WR import get_summarization_by_w2v_wr
from LDA import get_summarization_by_lda

# 跨域
@route('/<:re:.*>', method='OPTIONS')
def enable_cors_generic_route():
  add_cors_headers()
@hook('after_request')
def enable_cors_after_request_hook():
  """
  This executes after every route. We use it to attach CORS headers when applicable.
  """
  add_cors_headers()
def add_cors_headers():
  response.set_header('Access-Control-Allow-Origin', '*')
  response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

# summary
@route('/summary', method=['POST'])
def summary():
  print(request.json)
  type = request.json['type']
  text = request.json['text']
  title = request.json['title']
  res = ''
  if type == 'text_rank':
    res = get_summarization_by_textrank(text, title)
  elif type == 'naive_sent_vec':
    res = get_summarization_by_naive_sentvec(text, title)
  elif type == 'w2v_wr':
    res = get_summarization_by_w2v_wr(text, title)
  elif type == 'lda':
    res = get_summarization_by_lda(text, title)
  if res is None:
    res = ''
  response.headers['Content-type'] = 'application/json'
  return res


# 静态文件
# @route('/static/img/<filename>')
# def send_image(filename):
#   return static_file(filename, root='./dist/static/img/')
# @route('/static/css/<filename>')
# def send_css(filename):
#   return static_file(filename, root='./dist/static/css/')
# @route('/static/js/<filename>')
# def send_js(filename):
#   return static_file(filename, root='./dist/static/js/')
# @route('/static/<filename>')
# def send_urlconfig(filename):
#   return static_file(filename, root='./dist/static/')
# @route('/static/fonts/<filename>')
# def send_fonts(filename):
#   return static_file(filename, root='./dist/static/fonts/')
# @route('/favicon.ico')
# def send_ico():
#   return static_file('favicon.ico', root='./')


# @route('/')
# def index():
#   return template('./dist/index.html')

run(host='0.0.0.0', port=31000, debug=True)
