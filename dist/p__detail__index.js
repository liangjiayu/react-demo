(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '++J5': function(e, a, t) {},
    '06QD': function(e, a, t) {
      'use strict';
      t.d(a, 'b', function() {
        return n;
      }),
        t.d(a, 'a', function() {
          return i;
        });
      var r = t('k1fw'),
        n = { list: [] };
      function i(e, a) {
        switch (a.type) {
          case 'ADD_CART':
            return e.list.push(a.payload), Object(r['a'])({}, e);
          case 'DEl_CART':
            var t = e.list.findIndex(e => e.timeId === a.payload.timeId);
            return t > -1 && e.list.splice(t, 1), Object(r['a'])({}, e);
          default:
            return Object(r['a'])({}, e);
        }
      }
    },
    '9kvl': function(e, a, t) {
      'use strict';
      t.d(a, 'a', function() {
        return n['b'];
      }),
        t.d(a, 'b', function() {
          return i['a'];
        }),
        t.d(a, 'c', function() {
          return b;
        });
      var r,
        n = t('FfOG'),
        i = t('bCY9'),
        s = (t('I5X1'), t('WmNS')),
        o = t.n(s),
        c = t('9og8'),
        l = (t('/xke'), t('TeRw')),
        u = (t('miYZ'), t('tsqr')),
        d = (t('PpiC'), t('k1fw')),
        m = t('io9h'),
        p = t('LtsZ');
      t('0iz5');
      (function(e) {
        (e[(e['SILENT'] = 0)] = 'SILENT'),
          (e[(e['WARN_MESSAGE'] = 1)] = 'WARN_MESSAGE'),
          (e[(e['ERROR_MESSAGE'] = 2)] = 'ERROR_MESSAGE'),
          (e[(e['NOTIFICATION'] = 4)] = 'NOTIFICATION'),
          (e[(e['REDIRECT'] = 9)] = 'REDIRECT');
      })(r || (r = {}));
      var v,
        f = '/exception',
        E = () => {
          var e;
          if (v) return v;
          var a = i['a'].applyPlugins({
              key: 'request',
              type: p['ApplyPluginsType'].modify,
              initialValue: {},
            }),
            t =
              (null === (e = a.errorConfig) || void 0 === e
                ? void 0
                : e.adaptor) || (e => e);
          (v = Object(m['a'])(
            Object(d['a'])(
              {
                errorHandler: e => {
                  var i, s, o, c;
                  if (
                    null === e ||
                    void 0 === e ||
                    null === (i = e.request) ||
                    void 0 === i ||
                    null === (s = i.options) ||
                    void 0 === s
                      ? void 0
                      : s.skipErrorHandler
                  )
                    throw e;
                  if ('ResponseError' === e.name && e.data && e.request) {
                    var d,
                      m = { req: e.request, res: e.response };
                    (c = t(e.data, m)),
                      (e.message =
                        (null === (d = c) || void 0 === d
                          ? void 0
                          : d.errorMessage) || e.message),
                      (e.data = e.data),
                      (e.info = c);
                  }
                  if (((c = e.info), c)) {
                    var p,
                      v,
                      E,
                      b =
                        null === (p = c) || void 0 === p
                          ? void 0
                          : p.errorMessage,
                      k =
                        null === (v = c) || void 0 === v ? void 0 : v.errorCode,
                      N =
                        (null === (E = a.errorConfig) || void 0 === E
                          ? void 0
                          : E.errorPage) || f;
                    switch (
                      null === (o = c) || void 0 === o ? void 0 : o.showType
                    ) {
                      case r.SILENT:
                        break;
                      case r.WARN_MESSAGE:
                        u['a'].warn(b);
                        break;
                      case r.ERROR_MESSAGE:
                        u['a'].error(b);
                        break;
                      case r.NOTIFICATION:
                        l['a'].open({ message: b });
                        break;
                      case r.REDIRECT:
                        n['b'].push({
                          pathname: N,
                          query: { errorCode: k, errorMessage: b },
                        });
                        break;
                      default:
                        u['a'].error(b);
                        break;
                    }
                  } else
                    u['a'].error(e.message || 'Request error, please retry.');
                  throw e;
                },
              },
              a,
            ),
          )),
            v.use(
              (function() {
                var e = Object(c['a'])(
                  o.a.mark(function e(a, r) {
                    var n, i, s, c, l, u, d, m;
                    return o.a.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), r();
                          case 2:
                            if (
                              ((i = a.req),
                              (s = a.res),
                              !(null === (n = i.options) || void 0 === n
                                ? void 0
                                : n.skipErrorHandler))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt('return');
                          case 5:
                            if (
                              ((c = i.options),
                              (l = c.getResponse),
                              (u = l ? s.data : s),
                              (d = t(u, a)),
                              !1 !== d.success)
                            ) {
                              e.next = 15;
                              break;
                            }
                            throw ((m = new Error(d.errorMessage)),
                            (m.name = 'BizError'),
                            (m.data = u),
                            (m.info = d),
                            m);
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
          var s = a.middlewares || [];
          s.forEach(e => {
            v.use(e);
          });
          var E = a.requestInterceptors || [],
            b = a.responseInterceptors || [];
          return (
            E.map(e => {
              v.interceptors.request.use(e);
            }),
            b.map(e => {
              v.interceptors.response.use(e);
            }),
            v
          );
        },
        b = (e, a) => {
          var t = E();
          return t(e, a);
        };
      t('qhky');
    },
    '9pNP': function(e, a, t) {
      'use strict';
      var r = t('q1tI'),
        n = t.n(r),
        i =
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
      (i.defaultProps = {
        cancelText: '\u53d6\u6d88',
        confirmText: '\u786e\u5b9a',
      }),
        (a['a'] = i);
    },
    HwHu: function(e, a, t) {
      'use strict';
      var r = t('q1tI'),
        n = t.n(r),
        i = (t('++J5'), t('9kvl')),
        s = e =>
          n.a.createElement(
            'div',
            { className: 'navber-box-wrap' },
            n.a.createElement(
              'div',
              { className: 'navber-box' },
              n.a.createElement('i', {
                className: 'arrow-icon',
                onClick: () => {
                  i['a'].goBack();
                },
              }),
              n.a.createElement('div', { className: 'title' }, e.name),
            ),
          );
      (s.defaultProps = { name: '\u6807\u9898' }), (a['a'] = s);
    },
    ipAC: function(e, a, t) {
      'use strict';
      function r() {
        return (
          (r =
            Object.assign ||
            function(e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      t.r(a);
      var n = t('k1fw'),
        i = t('tJVT'),
        s = t('q1tI'),
        o = t.n(s),
        c = (t('pq+I'), t('9kvl')),
        l = t('HwHu'),
        u = t('06QD'),
        d = t('9pNP');
      a['default'] = () => {
        var e = Object(s['useState'])(null),
          a = Object(i['a'])(e, 2),
          t = a[0],
          m = a[1],
          p = Object(s['useReducer'])(u['a'], u['b']),
          v = Object(i['a'])(p, 2),
          f = (v[0], v[1]),
          E = Object(s['useState'])({
            visible: !1,
            title: '\u6e29\u99a8\u63d0\u793a',
            msg: '\u6dfb\u52a0\u6210\u529f',
            onCancel: () => {
              N(Object(n['a'])(Object(n['a'])({}, k), {}, { visible: !1 }));
            },
            onConfirm: () => {
              c['a'].push('/result');
            },
          }),
          b = Object(i['a'])(E, 2),
          k = b[0],
          N = b[1],
          O = () => {
            Object(c['c'])('/api/detail', {
              params: { id: c['a'].location.query.id },
            }).then(e => {
              m(e);
            });
          },
          g = () => {
            f({
              type: 'ADD_CART',
              payload: Object(n['a'])(
                Object(n['a'])({}, t),
                {},
                { timeId: new Date().getTime() },
              ),
            }),
              N(Object(n['a'])(Object(n['a'])({}, k), {}, { visible: !0 }));
          };
        return (
          Object(s['useEffect'])(() => {
            O();
          }, []),
          o.a.createElement(
            'div',
            { className: 'detail-page-root' },
            o.a.createElement(l['a'], { name: '\u4ea7\u54c1\u8be6\u60c5' }),
            o.a.createElement(
              d['a'],
              r({}, k, { confirmText: '\u7ed3\u7b97\u9875\u9762' }),
            ),
            t &&
              o.a.createElement(
                'div',
                null,
                o.a.createElement(
                  'div',
                  { className: 'detail-img' },
                  o.a.createElement('img', { src: t.img, alt: '' }),
                ),
                o.a.createElement(
                  'div',
                  { className: 'detail-info' },
                  o.a.createElement(
                    'div',
                    { className: 'price' },
                    t.price.toFixed(2),
                  ),
                  o.a.createElement('div', { className: 'title' }, t.title),
                  o.a.createElement('div', { className: 'sub-title' }, t.desc),
                ),
              ),
            o.a.createElement(
              'div',
              { className: 'detail-footer' },
              o.a.createElement(
                'div',
                { className: 'btn orange', onClick: g },
                '\u52a0\u5165\u8d2d\u7269\u8f66',
              ),
              o.a.createElement(
                'div',
                {
                  className: 'btn red',
                  onClick: () => {
                    c['a'].push('/form');
                  },
                },
                '\u7acb\u5373\u8d2d\u4e70',
              ),
            ),
          )
        );
      };
    },
    'pq+I': function(e, a, t) {},
    wiAh: function(e, a, t) {},
  },
]);
