<template>
<div>
  <div class="search content">
    <div class="tag-wrap" v-if="$route.query.key">
      <div class ="tags hidden">
        <Tag class="tag">{{$route.query.key}}</Tag>
        <Tag
          class="tag"
          v-for="(item, index) in labels"
          :key="index"
          :class="item"
          :name="item"
          :checkable="index !== currentLabelIndex"
          :checked="index === currentLabelIndex"
          @on-change="changeLabelIndex">
          <span :class="{current: index === currentLabelIndex}">{{labelsObj[item]}}</span>
        </Tag>
      </div>
      <div class="btns" v-if="page.total > 0">
        <Page :current="page.index" :total="page.total" simple show-total @on-change="pageChange"/>
      </div>
    </div>
    <div v-if="newsList.length > 0" style="width:100%;">
      <Row :gutter="20">
        <Col v-for="(item, index) in newsList" :key="index" class="card card-item" span="12">
          <Card>
            <p slot="title" class="hidden">
              {{ item.title}}
              <span class="more" @click="showMoreContent(item)">
                <span>more</span>
                <svg t="1566372115510" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1113" width="200" height="200"><path d="M512 42.666667c258.133333 0 469.333333 211.2 469.333333 469.333333s-211.2 469.333333-469.333333 469.333333S42.666667 770.133333 42.666667 512 253.866667 42.666667 512 42.666667z m0 853.333333c211.2 0 384-172.8 384-384S723.2 128 512 128 128 300.8 128 512s172.8 384 384 384z" fill="#2d8cf0" p-id="1114"></path><path d="M512 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64M725.333333 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64M298.666667 448c-36.266667 0-64 27.733333-64 64s27.733333 64 64 64 64-27.733333 64-64-27.733333-64-64-64" fill="#2d8cf0" p-id="1115"></path></svg>
              </span>
            </p>
            <p class="author">{{item.source}}  {{item.author}}</p>
            <p v-for="(i,idx) in getOpinion(item.opinion)" :key="idx">
              <Alert v-if="idx < 4">{{i[0]}}: {{i[2]}}</Alert>
            </p>
            <p v-if="getOpinion(item.opinion).length === 0">
              <Alert type="warning">暂无观点内容</Alert>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
    <div v-if="newsList.length === 0 && $route.query.key" class="tip">没有关键词{{$route.query.key}}对应{{labelsObj[labels[currentLabelIndex]]}}板块内容</div>
  </div>
  <Modal
    v-model="moreContentModal.show"
    :title="moreContentModal.title"
    @on-ok="okModal"
    :width="800"
    :scollable="true"
    class="contentModal"
    @on-cancel="cancelModal">
    <div v-html="moreContentModal.content"></div>
    <div slot="footer">
      <Button type="primary" @click="okModal">确定</Button>
    </div>
  </Modal>
  <Spin size="large" fix v-if="spinShow"></Spin>
</div>
</template>

<script>
export default {
  name: 'news-list',
  data () {
    return {
      newsList: [],
      spinShow: false,
      btnDisable: false,
      moreContentModal: {},
      page: {
        size: 10,
        index: 1,
        total: 0
      },
      labels: ['civilization', 'economy', 'education', 'military', 'polity', 'society', 'sports', 'other'],
      currentLabelIndex: 0
    }
  },
  mounted () {
    if (this.$route.query.key) {
      this.$emit('on-get-search-key')
      if (this.$route.query.label && this.labels.indexOf(this.$route.query.label) !== -1) {
        this.currentLabelIndex = this.labels.indexOf(this.$route.query.label)
      }
      this.getDetail(this.$route.query.key, this.labels[this.currentLabelIndex], this.page.index, this.page.size, 'spinShow')
    } else {
      this.$emit('on-clear-search-key')
      this.$Message.info('请在搜索框输入关键词进行搜索')
    }
  },
  methods: {
    getDetail (keyword, label, index, size, disableKey) {
      this[disableKey] = true
      this.$axios.get(`/getInfoByKeyword?keyword=${keyword.toLowerCase()}&label=${label}&page_size=${size}&page_index=${index}`).then(res => {
        this.newsList = res.data.data
        this.page.total = res.data.total
        this[disableKey] = false
      })
    },
    getOpinion (opinions) {
      return opinions.filter((item, index) => {
        return item[2] && item[2].length >= 4
      })
    },
    changeLabelIndex (checked, name) {
      this.currentLabelIndex = this.labels.indexOf(name)
      this.getDetail(this.$route.query.key, this.labels[this.currentLabelIndex], this.page.index, this.page.size, 'spinShow')
    },
    showMoreContent (item) {
      this.$set(this.moreContentModal, 'show', true)
      this.$set(this.moreContentModal, 'title', item.title)
      this.$set(this.moreContentModal, 'content', item.content.trim().replace(/\\n/g, '<br>'))
    },
    okModal () {
      this.moreContentModal = {}
      this.$set(this.moreContentModal, 'show', false)
    },
    cancelModal () {
      this.moreContentModal = {}
      this.$set(this.moreContentModal, 'show', false)
    },
    pageChange (e) {
      this.page.index = e
      this.getDetail(this.$route.query.key, this.labels[this.currentLabelIndex], this.page.index, this.page.size, 'spinShow')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tags {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.tag-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.author {
  text-align: right;
  padding-bottom: 10px;
}
.hidden {
  overflow: hidden;
}
.more {
  float: right;
  color: #2d8cf0;
  cursor: pointer;
}
.content>>>.ivu-card-head p span {
  vertical-align: top;
}
.more svg {
  width: 20px;
  height: 20px;
}
.card {
  margin-bottom: 15px;
}
.contentModal>>>.ivu-modal-body {
  max-height: 400px;
  overflow: auto;
}
.card-item>>>.ivu-card-bordered {
    height: 400px;
    overflow: auto;
    background-image: url('../assets/water_mark.png');
    background-position: right bottom;
    background-repeat: no-repeat;
}
.tag.ivu-tag-checked.civilization {
  background: #ff7f0e !important;
}
.tag.ivu-tag-checked.economy {
  background: #2ca02c !important;
}
.tag.ivu-tag-checked.education {
  background: #d62728 !important;
}
.tag.ivu-tag-checked.military {
  background: #9467bd !important;
}
.tag.ivu-tag-checked.polity {
  background: #1f77b4 !important;
}
.tag.ivu-tag-checked.society {
  background: #e377c2 !important;
}
.tag.ivu-tag-checked.sports {
  background: #7f7f7f !important;
}
.tag.ivu-tag-checked.other {
  background: #bcbd22 !important;
}
.tag.ivu-tag-checked span {
  color: #ffffff !important;
}
.tag.civilization>>>span {
  color: #ff7f0e;
}
.tag.economy>>>span {
  color: #2ca02c;
}
.tag.education>>>span {
  color: #d62728;
}
.tag.military>>>span {
  color: #9467bd;
}
.tag.polity>>>span {
  color: #1f77b4;
}
.tag.society>>>span {
  color: #e377c2;
}
.tag.sports>>>span {
  color: #7f7f7f;
}
.tag.other>>>span {
  color: #bcbd22;
}
.search >>> .ivu-tag:not(.ivu-tag-border):not(.ivu-tag-dot):not(.ivu-tag-checked) {
  border: 1px solid #e8eaec;
}
.search >>> .ivu-page-simple .ivu-page-simple-pager input {
  width: 50px;
}
.tip {
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
