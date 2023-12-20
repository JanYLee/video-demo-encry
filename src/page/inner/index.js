import '../../index'

window.onload = async () => {
  const options = {
    controls: true,
    width: 800,
    height: 600,
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
          'https://r3-ndr-private.ykt.cbern.com.cn/edu_product/65/video/17b0594b547a11eb96b8fa20200c3759/158bfc80999d1a8a01c504fce1012e6b.1920.1080.false/158bfc80999d1a8a01c504fce1012e6b.1920.1080.m3u8',
        type: 'application/x-mpegURL',
        label: '标清'
      },
      {
        src: 'https://r3-ndr-private.ykt.cbern.com.cn/edu_product/65/video/17b0594b547a11eb96b8fa20200c3759/158bfc80999d1a8a01c504fce1012e6b.1920.1080.false/158bfc80999d1a8a01c504fce1012e6b.1920.1080.m3u8',
        type: 'application/x-mpegURL',
        label: '高清'
      }
    ]
  }
  const handleXhrBeforeRequest = (op) => {
    if (op.headers === undefined) {
      op.headers = {}
    }
    const auth = 'MAC id="7F938B205F876FC3A30551F3A493138328341BB48A7ED9B06867E7AC2BE723CCCCFDB4C1FF21DB5B3B0966A0E18103DEA41A7F72B87830DA",nonce="1703060121009:NUQACS77",mac="Y0HV9n1na2tKC1IfWz9/D9jYAousOSj5czWUMP/XKyM="'
    if (auth) {
      op.headers['X-ND-AUTH'] = auth
    }
    return op
  }
  window.videojs.Hls.xhr.beforeRequest = handleXhrBeforeRequest
  window.xeduvideoplayer('video-dom', options)
}
