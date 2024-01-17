/* eslint-disable max-len */
import '../../index'

window.onload = async () => {
  const options = {
    headers: {
      'X-ND-AUTH': 'MAC id="7F938B205F876FC3A30551F3A4931383B4FCE59724E90C4A23C9A4D92D2961B2508559DA0EC840F72DC3124628B9587010B40E83439A0122",nonce="1705390607172:X4HZJK5T",mac="fbViSmNgDAzc6+RyPeiaYEBkreVvGeM++nBnd7ViTXo="'
    },
    controls: true,
    width: 1000,
    height: 800,
    plugins: {
      videoJsResolutionSwitcher: {
        default: '高清',
        dynamicLabel: true
      }
    },
    watermark: {
      userInfo: {
        real_name: 'xxx',
        user_id: '123456789'
      }
    },
    playbackRates: [0.75, 1, 1.25, 1.5, 1.75, 2],
    sources: [
      {
        src:
          'https://r3-ndr-private.ykt.cbern.com.cn/edu_product/esp/assets/65b3d273-5414-11eb-96b8-fa20200c3759.t/zh-CN/1703758074016/videos/530759a3-2c5e-4800-b175-87f10c0bdda5-852x480-true-84d701397a0a9c8a8bca267fd2354f0f-6fb19a26786b4f2a82108ecb25f9c3f2.m3u8',
        type: 'application/x-mpegURL',
        label: '标清'
      },
      {
        src: 'https://r3-ndr-private.ykt.cbern.com.cn/edu_product/esp/assets/65b3d273-5414-11eb-96b8-fa20200c3759.t/zh-CN/1703758074016/videos/530759a3-2c5e-4800-b175-87f10c0bdda5-852x480-true-84d701397a0a9c8a8bca267fd2354f0f-6fb19a26786b4f2a82108ecb25f9c3f2.m3u8',
        type: 'application/x-mpegURL',
        label: '高清'
      }

      // {
      //   src:
      //     'https://r1-ndr-private.ykt.cbern.com.cn/edu_product/esp/assets/65b3d273-5414-11eb-96b8-fa20200c3759.t/zh-CN/1703758074016/videos/530759a3-2c5e-4800-b175-87f10c0bdda5-1280x720-true-ade26a76a0cdd281a95ecd64ebfe6b7a-cf8abb16fe654c25a9ecb840db10c2a5.m3u8',
      //   type: 'application/x-mpegURL',
      //   label: '标清'
      // },
      // {
      //   src: 'https://r1-ndr-private.ykt.cbern.com.cn/edu_product/esp/assets/65b3d273-5414-11eb-96b8-fa20200c3759.t/zh-CN/1703758074016/videos/530759a3-2c5e-4800-b175-87f10c0bdda5-1280x720-true-ade26a76a0cdd281a95ecd64ebfe6b7a-cf8abb16fe654c25a9ecb840db10c2a5.m3u8',
      //   type: 'application/x-mpegURL',
      //   label: '高清'
      // }

      // {
      //   src: 'https://r3-ndr-private.ykt.cbern.com.cn/edu_product/65/video/30ed0ed853f111eb96b8fa20200c3759.t/zh-CN/1705392288074/transcode/videos/65b3d273-5414-11eb-96b8-fa20200c3759-852x480-true-84d701397a0a9c8a8bca267fd2354f0f-4fa8d6556fef4318811c9c20070525da.m3u8',
      //   type: 'application/x-mpegURL',
      //   label: '高清'
      // }
      // {
      //   src: '/videoplayer/out.m3u8',
      //   type: 'application/x-mpegURL',
      //   label: '高清'
      // }
      // {
      //   src: '/videoplayer/output.ts',
      //   type: 'application/x-mpegURL',
      //   label: '高清'
      // }
      // {
      //   src: 'https://v1.ykt.cbern.com.cn/65/video/30ed0ed853f111eb96b8fa20200c3759/0905039422d97479881ade437677b57a.852.480.mp4',
      //   // type: 'application/x-mpegURL',
      //   label: '高清'
      // }
    ]
  }
  // const handleXhrBeforeRequest = (op) => {
  //   if (op.headers === undefined) {
  //     op.headers = {}
  //   }
  //   const auth = 'MAC id="7F938B205F876FC3A30551F3A493138328341BB48A7ED9B06867E7AC2BE723CCCCFDB4C1FF21DB5B3B0966A0E18103DEA41A7F72B87830DA",nonce="1703060121009:NUQACS77",mac="Y0HV9n1na2tKC1IfWz9/D9jYAousOSj5czWUMP/XKyM="'
  //   if (auth) {
  //     op.headers['X-ND-AUTH'] = auth
  //   }
  //   return op
  // }
  // window.videojs.Hls.xhr.beforeRequest = handleXhrBeforeRequest
  window.xeduvideoplayer('video-dom', options)
}
