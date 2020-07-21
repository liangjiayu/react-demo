(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '++J5': function(e, a, t) {},
    '9kvl': function(e, a, t) {
      'use strict';
      t.d(a, 'a', function() {
        return n['b'];
      }),
        t.d(a, 'b', function() {
          return c['a'];
        }),
        t.d(a, 'c', function() {
          return f;
        });
      var r,
        n = t('FfOG'),
        c = t('bCY9'),
        l = (t('I5X1'), t('WmNS')),
        o = t.n(l),
        s = t('9og8'),
        i = (t('/xke'), t('TeRw')),
        m = (t('miYZ'), t('tsqr')),
        u = (t('PpiC'), t('k1fw')),
        d = t('io9h'),
        v = t('LtsZ');
      t('0iz5');
      (function(e) {
        (e[(e['SILENT'] = 0)] = 'SILENT'),
          (e[(e['WARN_MESSAGE'] = 1)] = 'WARN_MESSAGE'),
          (e[(e['ERROR_MESSAGE'] = 2)] = 'ERROR_MESSAGE'),
          (e[(e['NOTIFICATION'] = 4)] = 'NOTIFICATION'),
          (e[(e['REDIRECT'] = 9)] = 'REDIRECT');
      })(r || (r = {}));
      var p,
        E = '/exception',
        b = () => {
          var e;
          if (p) return p;
          var a = c['a'].applyPlugins({
              key: 'request',
              type: v['ApplyPluginsType'].modify,
              initialValue: {},
            }),
            t =
              (null === (e = a.errorConfig) || void 0 === e
                ? void 0
                : e.adaptor) || (e => e);
          (p = Object(d['a'])(
            Object(u['a'])(
              {
                errorHandler: e => {
                  var c, l, o, s;
                  if (
                    null === e ||
                    void 0 === e ||
                    null === (c = e.request) ||
                    void 0 === c ||
                    null === (l = c.options) ||
                    void 0 === l
                      ? void 0
                      : l.skipErrorHandler
                  )
                    throw e;
                  if ('ResponseError' === e.name && e.data && e.request) {
                    var u,
                      d = { req: e.request, res: e.response };
                    (s = t(e.data, d)),
                      (e.message =
                        (null === (u = s) || void 0 === u
                          ? void 0
                          : u.errorMessage) || e.message),
                      (e.data = e.data),
                      (e.info = s);
                  }
                  if (((s = e.info), s)) {
                    var v,
                      p,
                      b,
                      f =
                        null === (v = s) || void 0 === v
                          ? void 0
                          : v.errorMessage,
                      k =
                        null === (p = s) || void 0 === p ? void 0 : p.errorCode,
                      h =
                        (null === (b = a.errorConfig) || void 0 === b
                          ? void 0
                          : b.errorPage) || E;
                    switch (
                      null === (o = s) || void 0 === o ? void 0 : o.showType
                    ) {
                      case r.SILENT:
                        break;
                      case r.WARN_MESSAGE:
                        m['a'].warn(f);
                        break;
                      case r.ERROR_MESSAGE:
                        m['a'].error(f);
                        break;
                      case r.NOTIFICATION:
                        i['a'].open({ message: f });
                        break;
                      case r.REDIRECT:
                        n['b'].push({
                          pathname: h,
                          query: { errorCode: k, errorMessage: f },
                        });
                        break;
                      default:
                        m['a'].error(f);
                        break;
                    }
                  } else
                    m['a'].error(e.message || 'Request error, please retry.');
                  throw e;
                },
              },
              a,
            ),
          )),
            p.use(
              (function() {
                var e = Object(s['a'])(
                  o.a.mark(function e(a, r) {
                    var n, c, l, s, i, m, u, d;
                    return o.a.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), r();
                          case 2:
                            if (
                              ((c = a.req),
                              (l = a.res),
                              !(null === (n = c.options) || void 0 === n
                                ? void 0
                                : n.skipErrorHandler))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt('return');
                          case 5:
                            if (
                              ((s = c.options),
                              (i = s.getResponse),
                              (m = i ? l.data : l),
                              (u = t(m, a)),
                              !1 !== u.success)
                            ) {
                              e.next = 15;
                              break;
                            }
                            throw ((d = new Error(u.errorMessage)),
                            (d.name = 'BizError'),
                            (d.data = m),
                            (d.info = u),
                            d);
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(a, t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          var l = a.middlewares || [];
          l.forEach(e => {
            p.use(e);
          });
          var b = a.requestInterceptors || [],
            f = a.responseInterceptors || [];
          return (
            b.map(e => {
              p.interceptors.request.use(e);
            }),
            f.map(e => {
              p.interceptors.response.use(e);
            }),
            p
          );
        },
        f = (e, a) => {
          var t = b();
          return t(e, a);
        };
      t('qhky');
    },
    '9pNP': function(e, a, t) {
      'use strict';
      var r = t('q1tI'),
        n = t.n(r),
        c =
          (t('wiAh'),
          e =>
            n.a.createElement(
              'div',
              { style: { display: e.visible ? 'block' : 'none' } },
              n.a.createElement('div', { className: 'ko-mark' }),
              n.a.createElement(
                'div',
                { className: 'ko-dialog' },
                n.a.createElement(
                  'div',
                  { className: 'ko-dialog__hd' },
                  e.title,
                ),
                n.a.createElement('div', { className: 'ko-dialog__bd' }, e.msg),
                n.a.createElement(
                  'div',
                  { className: 'ko-dialog__ft' },
                  e.onCancel &&
                    n.a.createElement(
                      'div',
                      {
                        className: 'ko-dialog__btn default',
                        onClick: e.onCancel,
                      },
                      e.cancelText,
                    ),
                  e.onConfirm &&
                    n.a.createElement(
                      'div',
                      {
                        className: 'ko-dialog__btn primary',
                        onClick: e.onConfirm,
                      },
                      e.confirmText,
                    ),
                ),
              ),
            ));
      (c.defaultProps = {
        cancelText: '\u53d6\u6d88',
        confirmText: '\u786e\u5b9a',
      }),
        (a['a'] = c);
    },
    APdg: function(e, a, t) {
      'use strict';
      t.r(a);
      var r = t('k1fw'),
        n = t('tJVT'),
        c = t('q1tI'),
        l = t.n(c),
        o = (t('x/Gq'), t('9kvl')),
        s = t('HwHu'),
        i = t('9pNP');
      a['default'] = () => {
        var e = Object(c['useState'])({
            input: '',
            checkbox: [],
            radio: '',
            select: '',
          }),
          a = Object(n['a'])(e, 2),
          t = a[0],
          m = a[1],
          u = e => {
            var a = e.target.value,
              n = e.target.name;
            m(Object(r['a'])(Object(r['a'])({}, t), {}, { [n]: a }));
          },
          d = e => {
            var a = e.target.value,
              n = e.target.name,
              c = e.target.checked,
              l = t[n];
            if (c) l.push(a);
            else {
              var o = l.findIndex(e => e === a);
              l.splice(o, 1);
            }
            m(Object(r['a'])({}, t));
          },
          v = Object(c['useState'])({
            visible: !1,
            title: '\u5f39\u7a97\u6807\u9898',
            msg:
              '\u5f39\u7a97\u5185\u5bb9\uff0c\u544a\u77e5\u5f53\u524d\u72b6\u6001\u3001\u4fe1\u606f\u548c\u89e3\u51b3\u65b9\u6cd5\uff0c\u63cf\u8ff0\u6587\u5b57\u5c3d\u91cf\u63a7\u5236\u5728\u4e09\u884c\u5185',
            onCancel: () => {
              b(Object(r['a'])(Object(r['a'])({}, E), {}, { visible: !1 }));
            },
            onConfirm: () => {},
          }),
          p = Object(n['a'])(v, 2),
          E = p[0],
          b = p[1],
          f = () => {
            var e = JSON.stringify(t);
            b(
              Object(r['a'])(
                Object(r['a'])({}, E),
                {},
                {
                  msg: e,
                  visible: !0,
                  onConfirm: () => {
                    o['a'].push('/result');
                  },
                },
              ),
            );
          };
        return l.a.createElement(
          'div',
          { className: 'form-page-root' },
          l.a.createElement(i['a'], E),
          l.a.createElement(s['a'], { name: '\u8868\u5355\u9875\u9762' }),
          l.a.createElement(
            'div',
            { className: 'form-group' },
            l.a.createElement('div', { className: 'form-title' }, 'Input'),
            l.a.createElement('input', {
              className: 'form-control',
              type: 'text',
              value: t.input,
              name: 'input',
              onChange: u,
            }),
          ),
          l.a.createElement(
            'div',
            { className: 'form-group' },
            l.a.createElement('div', { className: 'form-title' }, 'Check'),
            l.a.createElement(
              'label',
              { className: 'check-label' },
              l.a.createElement('input', {
                type: 'checkbox',
                onChange: d,
                value: '\u591a\u90091',
                name: 'checkbox',
                checked: t.checkbox.includes('\u591a\u90091'),
              }),
              l.a.createElement(
                'span',
                { className: 'check-text' },
                '\u591a\u90091',
              ),
            ),
            l.a.createElement(
              'label',
              { className: 'check-label' },
              l.a.createElement('input', {
                type: 'checkbox',
                onChange: d,
                value: '\u591a\u90092',
                name: 'checkbox',
                checked: t.checkbox.includes('\u591a\u90092'),
              }),
              l.a.createElement(
                'span',
                { className: 'check-text' },
                '\u591a\u90092',
              ),
            ),
          ),
          l.a.createElement(
            'div',
            { className: 'form-group' },
            l.a.createElement('div', { className: 'form-title' }, 'Radio'),
            l.a.createElement(
              'label',
              { className: 'check-label' },
              l.a.createElement('input', {
                type: 'radio',
                name: 'radio',
                onChange: u,
                checked: '\u5355\u90091' === t.radio,
                value: '\u5355\u90091',
              }),
              l.a.createElement(
                'span',
                { className: 'check-text' },
                '\u5355\u90091',
              ),
            ),
            l.a.createElement(
              'label',
              { className: 'check-label' },
              l.a.createElement('input', {
                type: 'radio',
                name: 'radio',
                onChange: u,
                checked: '\u5355\u90092' === t.radio,
                value: '\u5355\u90092',
              }),
              l.a.createElement(
                'span',
                { className: 'check-text' },
                '\u5355\u90092',
              ),
            ),
          ),
          l.a.createElement(
            'div',
            { className: 'form-group' },
            l.a.createElement('div', { className: 'form-title' }, 'select'),
            l.a.createElement(
              'select',
              {
                className: 'form-control',
                name: 'select',
                onChange: u,
                value: t.select,
              },
              l.a.createElement(
                'option',
                { value: '', disabled: !0, hidden: !0 },
                '\u8bf7\u9009\u62e9',
              ),
              l.a.createElement(
                'option',
                { value: '\u4e0b\u62c91' },
                '\u4e0b\u62c91',
              ),
              l.a.createElement(
                'option',
                { value: '\u4e0b\u62c92' },
                '\u4e0b\u62c92',
              ),
              l.a.createElement(
                'option',
                { value: '\u4e0b\u62c93' },
                '\u4e0b\u62c93',
              ),
            ),
          ),
          l.a.createElement(
            'button',
            { className: 'form-button', onClick: f },
            '\u63d0\u4ea4',
          ),
        );
      };
    },
    HwHu: function(e, a, t) {
      'use strict';
      var r = t('q1tI'),
        n = t.n(r),
        c = (t('++J5'), t('9kvl')),
        l = e =>
          n.a.createElement(
            'div',
            { className: 'navber-box-wrap' },
            n.a.createElement(
              'div',
              { className: 'navber-box' },
              n.a.createElement('i', {
                className: 'arrow-icon',
                onClick: () => {
                  c['a'].goBack();
                },
              }),
              n.a.createElement('div', { className: 'title' }, e.name),
            ),
          );
      (l.defaultProps = { name: '\u6807\u9898' }), (a['a'] = l);
    },
    wiAh: function(e, a, t) {},
    'x/Gq': function(e, a, t) {},
  },
]);
