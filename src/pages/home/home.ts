import { Component } from '@angular/core';

import { NavController, Platform,NavParams,ViewController, ToastController, ModalController } from 'ionic-angular';
import { ModalContentPage } from './modal-content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mySlideOptions={
                autoplay:2000,
                initialSlide:0,
                pager:true,
                loop:true,
                speed:300
                };
	slides = [
    {
      title: "查看文档!",
      description: "<b>Ionic文档查看  </b><a>ionicframework.com/docs/v2/components</a>",
      image: "assets/img/smartisan/slide_img2.png",
    },
    {
      title: "Ionic2介绍",
      description: "<b>Ionic Framework</b> 基于angular JS 2.0",
      image: "assets/img/smartisan/slide_img1.png",
    }
  ];

  hot_shop = [
    {
       title: "《深泽直人》",
       description: "首次面向读者的宣传",
       price: "¥"+"149.00",
       image: "assets/img/smartisan/shop/shoplist1.jpg"
    },
    {
       title: "Smartisan M1/M1L 软胶保护套",
       description: "TPU环保材质、细腻防滑、防油污",
       price: "¥"+"49.00",
       image: "assets/img/smartisan/shop/shoplist2.jpg"
    },
    {
       title: "《日本制造》",
       description: "盛田昭夫的日式经营学",
       price: "¥"+"199.00",
       image: "assets/img/smartisan/shop/shoplist3.jpg"
    },
    {
       title: "Smartisan 坚果自拍杆",
       description: "通用 3.5 mm 接口、航空铝合金伸缩杆、防过敏硅胶手柄",
       price: "¥"+"19.50",
       image: "assets/img/smartisan/shop/shoplist4.jpg"
    }
  ];

  offical = [
    {
       title: "Smartisan 原装快充充电器",
       description: "24W 极速快充、兼容 QC3.0 和 PE+2.0",
       price: "¥"+"69",
       image: "assets/img/smartisan/selection/253X253@2x(4).jpg"
    },
    {
       title: "Smartisan 二合一数据线 0.2 m/1.5 m",
       description: "Type-C & Micro-USB 双接口、夜间微光灯",
       price: "¥"+"39",
       image: "assets/img/smartisan/selection/253X253@2x(5).jpg"
    },
    {
       title: "Smartisan 卫衣 老友记",
       description: "纪念老友记首播",
       price: "¥"+"249",
       image: "assets/img/smartisan/selection/253X253@2x(6).jpg"
    },
    {
       title: "Smartisan 卫衣 皇帝的新装",
       description: "纪念安徒生出版第一部童话集",
       price: "¥"+"249",
       image: "assets/img/smartisan/selection/253X253@2x(7).jpg"
    },
    {
       title: "SMicro-USB 至 Type-C 转接头 × 2",
       description: "即插即用、全面兼容",
       price: "¥"+"29",
       image: "assets/img/smartisan/selection/253X253@2x(8).jpg"
    },
    {
       title: "Smartisan S-1000 BASS",
       description: "VSONIC 创始人全程参与调音",
       price: "¥"+"199",
       image: "assets/img/smartisan/selection/253X253@2x(9).jpg"
    }
  ];

   brand = [
    {
       title: "FIIL Diva 智能蓝牙无线降噪耳机",
       description: "手势触控、智能启停",
       price: "¥"+"999",
       image: "assets/img/smartisan/selection2/253X253@2x(10).jpg"
    },
    {
       title: "车听宝",
       description: "点播式车载广播电台、WIFI 直连技术",
       price: "¥"+"29",
       image: "assets/img/smartisan/selection2/253X253@2x(11).jpg"
    },
    {
       title: "Sennheiser Urbanite XL 耳机",
       description: "专业音频技术、优质不锈钢组件、简单便携可折叠",
       price: "¥"+"1699",
       image: "assets/img/smartisan/selection2/253X253@2x(12).jpg"
    },
    {
       title: "FUNIPICA F-516 手机外置镜头",
       description: "0.36x 大广角、15x 微距、180° 鱼眼",
       price: "¥"+"119",
       image: "assets/img/smartisan/selection2/253X253@2x(13).jpg"
    }
  ];

  app = [
    {
       title: "HandShaker",
       description: "HandShaker 是连接手机和电脑之间的文件传输及管理工具秉持简洁易用的设计原则",
       image: "assets/img/smartisan/app/wap-app-icon-handshaker_c59ebc7395.png"
    },
    {
       title: "锤子便签",
       description: "可能是史上最漂亮的便签应用，你或许会因它重新喜欢上记录和表达。",
       image: "assets/img/smartisan/app/wap-app-icon-note_bfaf76efd2.png"
    }
  ];

  items = [
    {
      title:'订单服务',
      items:[{
          name:'购买指南'
        },
        {
          name:'支付方式'
        },
        {
          name:'送货政策'
        },
      ],
      show:'false',
    },
    {
      title:'服务支持',
      items:[{
          name:'售后服务'
        },
        {
          name:'售后政策'
        },
        {
          name:'保修服务'
        },
      ],
      show:'false',
    },
    {
      title:'自动服务',
      items:[{
          name:'热点资讯'
        },
      ],
      show:'false',
    },
    {
      title:'媒体中心',
      items:[{
          name:'新闻动态'
        },
      ],
      show:'false',
    },
    {
      title:'关于公司',
      items:[{
          name:'公司简介'
        },
      ],
      show:'false',
    },
    {
      title:'关注我们',
      items:[{
          name:'新浪微博'
        },
      ],
      show:'false',
    },
  ];


  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {
  }
  openModal() {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }
  presentToast(position: string) {
    let toast = this.toastCtrl.create({
      message: '不好意思目前无法跳过',
      duration: 3000,
      position: position
    });
    toast.present(toast);
  }
  itemSelected(item){
    item.show = !item.show;
  }
  isHidden(item){
      return item.show;
  }

}

