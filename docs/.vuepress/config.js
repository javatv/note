module.exports = {
    port: "8080",
    //dest: ".site",
    base: "/",
    // 是否开启默认预加载js
    shouldPrefetch: (file, type) => {
        return false;
    },
    // webpack 配置 https://vuepress.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            const dateTime = new Date().getTime();

            // 清除js版本号
            config.output.filename('assets/js/cg-[name].js?v=' + dateTime).end();
            config.output.chunkFilename('assets/js/cg-[name].js?v=' + dateTime).end();

            // 清除css版本号
            config.plugin('mini-css-extract-plugin').use(require('mini-css-extract-plugin'), [{
                filename: 'assets/css/[name].css?v=' + dateTime,
                chunkFilename: 'assets/css/[name].css?v=' + dateTime
            }]).end();

        }
    },
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Javatv",
            description: "学习知识，目光坚毅，勤于探索，乐于分享"
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "Javatv"}],
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
        ["meta", {
            name: "keywords",
            content: "Javatv,设计模式,Spring源码,中间件,Java基础"
        }],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/jquery.min.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/global.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: '/js/fingerprint2.min.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: 'https://s9.cnzz.com/z_stat.php?id=1278232949&web_id=1278232949',
            }],
        // 添加百度统计
        ["script", {},
            `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?d58aa3ea73c1219f9c7b77eafa3e9535";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `
        ]
    ],
    plugins: [
        [
            {globalUIComponents: ['LockArticle', 'PayArticle']}
        ],
        // ['@vssue/vuepress-plugin-vssue', {
        //     platform: 'github-v3', //v3的platform是github，v4的是github-v4
        //     // 其他的 Vssue 配置
        //     owner: 'fuzhengwei', //github账户名
        //     repo: 'CodeGuide', //github一个项目的名称
        //     clientId: 'df8beab2190bec20352a',//注册的Client ID
        //     clientSecret: '7eeeb4369d699c933f02a026ae8bb1e2a9c80e90',//注册的Client Secret
        //     autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        // }
        // ],
        // ['@vuepress/back-to-top', true], replaced with inject page-sidebar
        ['@vuepress/medium-zoom', {
            selector: 'img:not(.nozoom)',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E9%80%89%E9%A1%B9
        // ['@vuepress/pwa', {
        //     serviceWorker: true,
        //     updatePopup: {
        //         '/': {
        //             message: "发现新内容可用",
        //             buttonText: "刷新"
        //         },
        //     }
        // }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
        // ['copyright', {
        //     noCopy: false, // 允许复制内容
        //     minLength: 100, // 如果长度超过 100 个字符
        //     authorName: "https://www.javatv.net",
        //     clipboardComponent: "请注明文章出处, [Javatv](https://www.javatv.net)"
        // }],
        // see: https://github.com/ekoeryanto/vuepress-plugin-sitemap
        // ['sitemap', {
        //     hostname: 'https://www.javatv.net'
        // }],
        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {}],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
        ['vuepress-plugin-code-copy', {
            align: 'bottom',
            color: '#3eaf7c',
            successText: '@Javatv: 代码已经复制到剪贴板'
        }],
        // see: https://github.com/tolking/vuepress-plugin-img-lazy
        ['img-lazy', {}],
        ["vuepress-plugin-tags", {
            type: 'default', // 标签预定义样式
            color: '#42b983',  // 标签字体颜色
            border: '1px solid #e2faef', // 标签边框颜色
            backgroundColor: '#f0faf5', // 标签背景颜色
            selector: '.page .content__default h1' // ^v1.0.1 你要将此标签渲染挂载到哪个元素后面？默认是第一个 H1 标签后面；
        }],
        // https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: $page => $page.frontmatter.tags,
            // twitterCard: _ => 'summary_large_image',
            type: $page => 'article',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        }]
    ],
    themeConfig: {
        docsRepo: "javatv/note",
        // 编辑文档的所在目录
        docsDir: 'docs',
        // 文档放在一个特定的分支下：
        docsBranch: 'master',
        //logo: "/logo.png",
        editLinks: true,
        sidebarDepth: 0,
        //smoothScroll: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: '导读', link: '/md/01.指南/guide-to-reading.md'
                    },
                    {
                        text: '指南',
                        items: [
                            {
                                text: 'Java',
                                items: [
                                    {
                                        text: 'Java基础',
                                        link: '/md/02.java/01.java基础/01.泛型.md'
                                    },
                                    {
                                        text: 'JVM 进阶',
                                        link: '/md/02.java/02.jvm/01.JVM的内存结构.md'
                                    },
                                    {
                                        text: '并发编程',
                                        link: '/md/02.java/03.并发编程/00.JMM & 并发三大特性.md'
                                    }
                                ]
                            },
                            {
                                text: '网络协议',
                                items: [
                                    {
                                        text: '网络协议',
                                        link: '/md/03.网络协议/03.BIO、NIO、AIO.md'
                                    },
                                ]
                            },
                            {
                                text: 'MySQL',
                                items: [
                                    {
                                        text: 'MySQL基础',
                                        link: '/md/05.MySQL/01.MySQL基础/01.事务和隔离级别.md'
                                    },
                                    {
                                        text: 'ShardingJDBC',
                                        link: ''
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: 'Spring',
                        items: [
                            {
                                text: 'Spring源码',
                                link: '/md/04.spring/01.spring源码/01.Spring源码编译及阅读源码入门.md'
                            },
                            {
                                text: 'SpringCloud Alibaba',
                                link: '/md/04.spring/02.SpringCloud Alibaba/01.简介.md'
                            }
                        ]
                    },
                    {
                        text: '中间件',
                        items: [
                            {
                                text: 'Redis',
                                link: '/md/06.Redis/01.数据结构.md'
                            },
                            {
                                text: 'RabbitMQ',
                                link: '/md/07.中间件/01.RabbitMQ/01.什么是MQ.md'
                            },
                        ]
                    },
                    {
                        text: '数据结构和算法',
                        items: [
                            {
                                text: '数据结构',
                                link: '/md/08.数据结构和算法/01.数据结构/01.线性表之顺序表ArrayList.md'
                            },
                            {
                                text: '算法思想',
                                link: '/md/08.数据结构和算法/02.算法思想/03.滑动窗口.md'
                            },
                            {
                                text: 'LeetCode',
                                link: '/md/08.数据结构和算法/03.LeetCode/01.两数之和.md'
                            },
                        ]
                    },
                    {
                        text: '设计模式', link: '/md/15.设计模式/00.设计模式六大原则.md', items: [
                            {
                                text: "创建型模式",
                                items: [
                                    {text: "工厂方法模式", link: "/md/15.设计模式/01.工厂方法模式.md"},
                                    {text: "抽象工厂模式", link: "/md/15.设计模式/02.抽象工厂模式.md"},
                                    {text: "建造者模式", link: "/md/15.设计模式/03.建造者模式.md"},
                                    {text: "单例模式", link: "/md/15.设计模式/04.单例模式.md"},
                                    {text: "原型模式", link: "/md/15.设计模式/05.原型模式.md"},
                                ]
                            },
                            {
                                text: "结构型模式",
                                items: [
                                    {text: "适配器模式", link: "/md/15.设计模式/06.适配器模式.md"},
                                    {text: "桥接模式", link: "/md/15.设计模式/07.桥接模式.md"},
                                    {text: "装饰器模式", link: "/md/15.设计模式/08.装饰器模式.md"},
                                    {text: "代理模式", link: "/md/15.设计模式/09.代理模式.md"},
                                    {text: "组合模式", link: "/md/15.设计模式/10.组合模式.md"},
                                    {text: "外观模式", link: "/md/15.设计模式/11.外观模式.md"},
                                    {text: "享元模式", link: "/md/15.设计模式/12.享元模式.md"},
                                ]
                            },
                            {
                                text: "行为型模式",
                                items: [
                                    {text: "模板方法模式", link: "/md/15.设计模式/13.模板方法模式.md"},
                                    {text: "策略模式", link: "/md/15.设计模式/14.策略模式.md"},
                                    {text: "责任链模式", link: "/md/15.设计模式/15.责任链模式.md"},
                                    {text: "观察者模式", link: "/md/15.设计模式/16.观察者模式.md"},
                                    {text: "命令模式", link: "/md/15.设计模式/17.命令模式.md"},
                                    {text: "访问者模式", link: "/md/15.设计模式/18.访问者模式.md"},
                                    {text: "迭代器模式", link: "/md/15.设计模式/19.迭代器模式.md"},
                                    {text: "备忘录模式", link: "/md/15.设计模式/20.备忘录模式.md"},
                                    {text: "状态模式", link: "/md/15.设计模式/21.状态模式.md"},
                                    {text: "中介者模式", link: "/md/15.设计模式/22.中介者模式.md"},
                                    {text: "解释器模式", link: "/md/15.设计模式/23.解释器模式.md"},
                                ]
                            }
                        ]
                    },
                    {
                        text: '开发工具',
                        items: [
                            {
                                text: 'IDEA中使用Git',
                                link: '/md/20.开发工具/02.IDEA中使用Git.md'
                            },
                        ]
                    },
                    {
                        text: '关于',
                        items: [
                            {
                                text: '关于工作',
                                link: '/md/21.关于/02.关于工作.md'
                            },
                        ]
                    },
                    {text: 'CSDN', link: 'https://javatv.blog.csdn.net/'},
                    {text: '旧版', link: 'http://blog.javatv.net/'},
                    {
                        text: 'Github',
                        link: 'https://github.com/javatv/note'
                    }
                ],
                sidebar: {
                    "/md/01.指南/": genBarOther(),
                    "/md/02.java/": genBarJavaCore(),
                    "/md/03.网络协议/": genBarNetworkProtocol(),
                    "/md/04.spring/": genBarSpring(),
                    "/md/05.MySQL/": genBarMySQL(),
                    "/md/06.Redis/": genBarRedis(),
                    "/md/07.中间件/": genBarMiddleware(),
                    "/md/08.数据结构和算法/": genBarAlgo(),
                    "/md/15.设计模式/": genBarDesignPatterns(),
                    "/md/20.开发工具/": genBarTools(),
                    "/md/21.关于/": genBarAbout(),
                }
            }
        }
    }
};


// 阅读指南
function genBarOther() {
    return [
        {
            title: "阅读指南",
            collapsable: false,
            sidebarDepth: 2,
            children: [
                "guide-to-reading.md"
            ]
        }
    ]
}

// java
function genBarJavaCore() {
    return [
        {
            title: "Java基础",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.java基础/01.泛型.md",
                "01.java基础/02.序列化和反序列化.md",
                "01.java基础/03.深拷贝和浅拷贝.md",
                "01.java基础/15.SimpleDateFormat 并发隐患及其解决.md",
            ]
        },
        {
            title: "走进 JVM",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "02.jvm/01.JVM的内存结构.md",
                "02.jvm/02.JVM中的对象及引用.md",
                "02.jvm/03.分代回收机制和垃圾回收算法.md",
                "02.jvm/04.Class文件结构和字节码指令.md",
                "02.jvm/05.JVM类加载机制.md",
                "02.jvm/06.Java方法调用的底层实现.md",
                "02.jvm/07.JDK性能诊断工具.md",
                "02.jvm/08.Arthas阿里开源的Java诊断工具.md",
                "02.jvm/09.JVM性能调优之内存优化与GC优化.md",
                "02.jvm/10.JVM 线上调优实战.md",
                "02.jvm/20.CMS 垃圾回收器.md",
                "02.jvm/21.G1 垃圾回收器.md",
            ]
        },
        {
            title: "并发编程",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "03.并发编程/00.JMM & 并发三大特性.md",
                "03.并发编程/01.Java中的对象头.md",
                "03.并发编程/02.synchronized底层实现.md",
                "03.并发编程/03.synchronized的使用及优化.md",
                "03.并发编程/04.Lock.md",
                "03.并发编程/06.ReentranLock.md",
                "03.并发编程/07.ReentrantReadWriteLock.md",
                "03.并发编程/08.阻塞和唤醒线程之LockSupport.md",
                "03.并发编程/10.线程池.md",
                "03.并发编程/11.ConcurrentHashMap.md",
                "03.并发编程/12.CountDownLatch.md",
                "03.并发编程/13.CylicBarrier.md",
                "03.并发编程/14.Semaphore.md",
                "03.并发编程/15.ForkJoin.md",
                "03.并发编程/16.BlockingQueue.md",
                "03.并发编程/17.Future & CompletionService.md",
                "03.并发编程/18.Disruptor.md",
            ]
        }
    ]
}

// 网络协议
function genBarNetworkProtocol() {
    return [
        {
            title: "网络协议",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.泛型.md",
                "03.BIO、NIO、AIO.md",
            ]
        },
    ]
}

// spring
function genBarSpring() {
    return [
        {
            title: "Spring 源码",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.spring源码/01.Spring源码编译及阅读源码入门.md",
                "01.spring源码/02.SpringBean的注册-XML源码解析.md",
                "01.spring源码/03.invokeBeanFactoryPostProcessors.md",
                "01.spring源码/04.Bean的实例化.md",
                "01.spring源码/05.Spring中的循环依赖.md",
                "01.spring源码/06.FactoryBean.md",
                "01.spring源码/07.配置文件解析.md",
                "01.spring源码/08.ConfigurationClassPostProcessor 类.md",
                "01.spring源码/09.AOP初见.md",
            ]
        },
        {
            title: "SpringCloud Alibaba",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "02.SpringCloud Alibaba/01.简介.md",
                "02.SpringCloud Alibaba/02.版本依赖管理.md",
                "02.SpringCloud Alibaba/03.服务的注册与发现.md",
                "02.SpringCloud Alibaba/04.服务熔断Sentinel.md",
                "02.SpringCloud Alibaba/05.路由网关Gateway.md",
                "02.SpringCloud Alibaba/06.服务配置中心Nacos Config.md",
            ]
        },
    ]
}

// mysql
function genBarMySQL() {
    return [
        {
            title: "MySQL 基础",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.MySQL基础/01.事务和隔离级别.md",
                "01.MySQL基础/02.数据库的三范式.md",
                "01.MySQL基础/03.数据类型优化.md",
                "01.MySQL基础/04.高性能索引.md",
                "01.MySQL基础/05.性能优化.md",
                "01.MySQL基础/06.InnoDB 引擎底层解析.md",
                "01.MySQL基础/07.事务的原理.md",
                "01.MySQL基础/08.MVCC原理.md",
                "01.MySQL基础/09.MySQL中的锁.md",
            ]
        },
    ]
}

// redis
function genBarRedis() {
    return [
        {
            title: "分布式缓存 Redis",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.数据结构.md",
                "02.慢查询.md",
                "03.Pipeline.md",
                "04.事务.md",
                "06.持久化.md",
                "08.Redis的高并发高可用.md",
                "09.缓存场景引发的问题.md",
                "10.缓存一致性解决方案.md",
                "11.布隆过滤器.md",
                "12.分布式锁实践.md",
            ]
        },
    ]
}

// 中间件
function genBarMiddleware() {
    return [
        {
            title: "RabbitMQ",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.RabbitMQ/01.什么是MQ.md",
                "01.RabbitMQ/02.RabbitMQ 介绍.md",
                "01.RabbitMQ/03.RabbitMQ 安装.md",
                "01.RabbitMQ/04.消息确认机制.md",
                "01.RabbitMQ/05.RabbitMQ 消息模型.md",
                "01.RabbitMQ/06.消息发布的权衡 .md",
                "01.RabbitMQ/07.消息消费的权衡.md",
                "01.RabbitMQ/08.消息的拒绝.md",
                "01.RabbitMQ/09.死信和死信队列.md",
                "01.RabbitMQ/10.消息队列的控制.md",
                "01.RabbitMQ/11.Spring 集成 RabbitMQ.md",
                "01.RabbitMQ/12.SpringBoot 集成 RabbitMQ.md",
                "01.RabbitMQ/13.RabbitMQ 补偿机制、消息幂等性实践.md",
                "01.RabbitMQ/14.RabbitMQ 延时队列实践.md",
                "01.RabbitMQ/20.RabbitMQ 总结.md",
            ]
        },
    ]
}

// 数据结构和算法
function genBarAlgo() {
    return [
        {
            title: "数据结构",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.数据结构/01.线性表之顺序表ArrayList.md",
                "01.数据结构/02.线性表之链表LinkedList.md",
                "01.数据结构/03.栈和队列.md",
                "01.数据结构/04.时间复杂度和空间复杂度.md",
                "01.数据结构/05.树和二叉树.md",
                "01.数据结构/06.二叉查找树&AVL树.md",
                "01.数据结构/07.红黑树.md",
                "01.数据结构/08.十大排序算法.md",
                "01.数据结构/09.字符串.md",
                "01.数据结构/10.哈希表.md",
                "01.数据结构/11.一致性哈希算法.md",
                "01.数据结构/12.LRU.md",
                "01.数据结构/15.跳表.md",
            ]
        },
        {
            title: "算法思想",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "02.算法思想/01.递归和迭代.md",
                "02.算法思想/02.二分查找.md",
                "02.算法思想/03.滑动窗口.md",
                "02.算法思想/04.动态规划.md",
                "02.算法思想/05.回溯算法.md",
                "02.算法思想/06.分治算法.md",
                "02.算法思想/08.贪心算法.md",
            ]
        },
        {
            title: "LeetCode",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "03.LeetCode/01.两数之和.md",
                "03.LeetCode/02.两数相加.md",
                "03.LeetCode/03.无重复字符的最长子串.md",
                "03.LeetCode/04.寻找两个正序数组的中位数.md",
                "03.LeetCode/05.最长回文子串.md",
                "03.LeetCode/06.Z 字形变换.md",
                "03.LeetCode/15.三数之和.md",
                "03.LeetCode/26. 删除有序数组中的重复项.md",
                "03.LeetCode/62.不同路径.md",
                "03.LeetCode/70.爬楼梯.md",
                "03.LeetCode/79.单词搜索.md",
                "03.LeetCode/83.删除排序链表中的重复元素.md",
                "03.LeetCode/94.二叉树的中序遍历.md",
                "03.LeetCode/136.只出现一次的数字.md",
                "03.LeetCode/146.LRU 缓存.md",
                "03.LeetCode/148.排序链表.md",
                "03.LeetCode/206.反转链表.md",
                "03.LeetCode/509.斐波那契数.md",
                "03.LeetCode/1143. 最长公共子序列.md",
            ]
        }
    ]
}

// 设计模式
function genBarDesignPatterns() {
    return [
        {
            title: "设计模式",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "00.设计模式六大原则.md",
                "01.工厂方法模式.md",
                "02.抽象工厂模式.md",
                "03.建造者模式.md",
                "04.单例模式.md",
                "05.原型模式.md",
                "06.适配器模式.md",
                "07.桥接模式.md",
                "08.装饰器模式.md",
                "09.代理模式.md",
                "10.组合模式.md",
                "11.外观模式.md",
                "12.享元模式.md",
                "13.模板方法模式.md",
                "14.策略模式.md",
                "15.责任链模式.md",
                "16.观察者模式.md",
                "17.命令模式.md",
                "18.访问者模式.md",
                "19.迭代器模式.md",
                "20.备忘录模式.md",
                "21.状态模式.md",
                "22.中介者模式.md",
                "23.解释器模式.md",
            ]
        },
    ]
}

// 开发工具
function genBarTools() {
    return [
        {
            title: "开发工具",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "02.IDEA中使用Git.md",
            ]
        },
    ]
}

// 开发工具
function genBarAbout() {
    return [
        {
            title: "关于",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "02.关于工作.md",
            ]
        },
    ]
}