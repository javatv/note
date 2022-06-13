<template>
    <table v-if="data.navlist && data.navlist.length" class="sitemap-table">
      <tr v-for="(navitem, index) in data.navlist" :key="index">
        <td nowrap><div class="sitemap-col-group">{{ navitem.title }}</div></td>
        <td v-if="0==navitem.linkMode" >
          <div class="sitemap-col-item" v-for="item in navitem.list" :key="item.url">
            <a :href="item.url" target="_blank" :title="item.title">  
              {{ item.title || '' }}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
            </a>
          </div>
        </td>
        <td v-if="0!=navitem.linkMode" >
            <router-link class="sitemap-col-item" v-for="item in navitem.list" :key="item.url" :to="item.url" >
              {{ item.title || '' }}
            </router-link>
        </td>
      </tr>
    </table>
</template>

<script>

export default {
  name: 'SiteMap',
  components: {},
  computed: {
    data() {
      return {
        navlist: [
          {
            title: '常用搜索',
            linkMode: 0,
            list: [
              {
                title: '百度',
                img: '/_images/tool-logo/baidu.jpg',
                des: '百度——全球最大的中文搜索引擎及最大的中文网站，全球领先的人工智能公司。',
                url: 'http://www.baidu.com/'
              },
              {
                title: 'Google',
                img: '/_images/tool-logo/google.png',
                des: '全球最大的搜索引擎公司',
                url: 'http://www.google.com/'
              },
              {
                title: 'Bing',
                img: '/_images/tool-logo/bing.jpg',
                des: '微软公司推出的用以取代Live Search的搜索引擎',
                url: 'http://www.bing.com/'
              },
              {
                title: 'Github',
                img: '/_images/tool-logo/github.jpg',
                des: 'GitHub是一个面向开源及私有软件项目的托管平台',
                url: 'https://github.com'
              },
              {
                title: '搜代码',
                img: '/_images/tool-logo/java.jpg',
                des: '不知道某个类如何使用? 来这里搜索Java 代码吧...',
                url: 'https://www.programcreek.com/java-api-examples/index.php'
              }
            ]
          },
          {
            title: '技术社区',
            linkMode: 0,
            list: [
              {
                title: 'CDSN',
                img: '/_images/tool-logo/csdn.gif',
                des: '中国专业IT社区CSDN',
                url: 'http://www.csdn.net/'
              },
              {
                  title: 'InfoQ 写作社区',
                  img: '/_images/tool-logo/ibm.jpeg',
                  des: 'IBM开发者社区',
                  url: 'https://xie.infoq.cn/'
              },
              {
                title: '博客园',
                img: '/_images/tool-logo/cnblog.gif',
                des: '开发者的网上家园',
                url: 'http://www.cnblogs.com/'
              },
              {
                title: 'OSChina',
                img: '/_images/tool-logo/oschina.gif',
                des: '中国最大的开源技术社区',
                url: 'https://www.oschina.net'
              },
              {
                title: '思否',
                img: '/_images/tool-logo/segmentfault.png',
                des: '中国领先的开发者技术社区',
                url: 'https://segmentfault.com/'
              },
              {
                title: '掘金',
                img: '/_images/tool-logo/juejin.svg',
                des: '掘金是一个帮助开发者成长的社区，是一个面向互联网技术人的内容分享平台',
                url: 'https://juejin.im'
              },
              {
                title: 'Linux公社',
                img: '/_images/tool-logo/linuxidc.jpg',
                des: 'Linux系统门户网站',
                url: 'https://www.linuxidc.com/'
              },
              {
                title: 'StackOverflow',
                img: '/_images/tool-logo/stackoverflow.png',
                des: 'Stack Overflow是一个与程序相关的IT技术问答网站',
                url: 'https://stackoverflow.com'
              }
            ]
          },
          {
            title: 'Java相关',
            list: [
              {
                title: '数据结构和算法',
                url: '/md/08.数据结构和算法/01.数据结构/08.十大排序算法.html'
              },
              {
                title: '并发和锁',
                url: '/md/02.java/03.并发编程/00.JMM & 并发三大特性.html'
              },
              {
                title: '多线程',
                url: '/md/02.java/03.并发编程/10.线程池.html'
              },
              {
                title: 'JVM 虚拟机',
                url: '/md/02.java/02.jvm/01.JVM的内存结构.html'
              },
              {
                title: '设计模式',
                url: '/md/15.设计模式/00.设计模式六大原则.html'
              }
            ]
          },
          {
            title: 'Spring',
            list: [
              {
                title: 'Spring 源码分析',
                url: '/md/04.spring/01.spring源码/01.Spring源码编译及阅读源码入门.html'
              },
              {
                title: 'SpringCloud 入门',
                url: '/md/04.spring/02.SpringCloud Alibaba/01.简介.html'
              },
            ]
          },
          {
            title: '中间件',
            list: [
              {
                title: 'MySQL',
                url: '/md/05.MySQL/01.MySQL基础/01.事务和隔离级别.html'
              },
              {
                title: 'Redis',
                url: '/md/06.Redis/01.数据结构.html'
              },
              {
                title: 'RabbitMQ',
                url: '/md/07.中间件/01.RabbitMQ/02.RabbitMQ 介绍.html'
              },
            ]
          },
          {
            title: '开发工具',
            list: [
              {
                title: 'Maven',
                url: '/md/20.开发工具/01.项目管理 Maven.html'
              },
              {
                title: 'Git',
                url: '/md/20.开发工具/02.IDEA中使用Git.html'
              },
            ]
          },
        ]
      }
    }
  },
  mounted() {
  },
  methods: {}
}
</script>
<style lang='stylus'>
  .sitemap-table
    margin 0
    tr:nth-child(2n)
      background-color: #fff;
    th, td
      border: 1px solid #f6f7f9;
      padding: 5px;
      padding-bottom: 0;

  .sitemap-col-group
    margin-bottom:5px;
    font-size: 12px;
    font-weight: bold;
  
  .sitemap-col-item
    float: left;
    margin-right: 5px;
    font-size: 12px;
    margin-bottom: 5px;
    padding: 3px 8px;
    background-color: #fbfbfb;
    border-radius: 2px;
    border: 1px solid #eee;
    //box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #42b983;
    font-weight: 400;
    a
      font-weight: 400;
      color: #42b983;
  .sitemap-col-item:hover
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
    color: $accentColor
    a
      color: $accentColor

</style>
