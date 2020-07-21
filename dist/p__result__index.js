(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '06QD': function(e, r, a) {
      'use strict';
      a.d(r, 'b', function() {
        return s;
      }),
        a.d(r, 'a', function() {
          return n;
        });
      var t = a('k1fw'),
        s = { list: [] };
      function n(e, r) {
        switch (r.type) {
          case 'ADD_CART':
            return e.list.push(r.payload), Object(t['a'])({}, e);
          case 'DEl_CART':
            var a = e.list.findIndex(e => e.timeId === r.payload.timeId);
            return a > -1 && e.list.splice(a, 1), Object(t['a'])({}, e);
          default:
            return Object(t['a'])({}, e);
        }
      }
    },
    '51T4': function(e, r, a) {},
    '9kvl': function(e, r, a) {
      'use strict';
      a.d(r, 'a', function() {
        return s['b'];
      }),
        a.d(r, 'b', function() {
          return n['a'];
        }),
        a.d(r, 'c', function() {
          return b;
        });
      var t,
        s = a('FfOG'),
        n = a('bCY9'),
        o = (a('I5X1'), a('WmNS')),
        i = a.n(o),
        c = a('9og8'),
        l = (a('/xke'), a('TeRw')),
        u = (a('miYZ'), a('tsqr')),
        d = (a('PpiC'), a('k1fw')),
        p = a('io9h'),
        v = a('LtsZ');
      a('0iz5');
      (function(e) {
        (e[(e['SILENT'] = 0)] = 'SILENT'),
          (e[(e['WARN_MESSAGE'] = 1)] = 'WARN_MESSAGE'),
          (e[(e['ERROR_MESSAGE'] = 2)] = 'ERROR_MESSAGE'),
          (e[(e['NOTIFICATION'] = 4)] = 'NOTIFICATION'),
          (e[(e['REDIRECT'] = 9)] = 'REDIRECT');
      })(t || (t = {}));
      var E,
        m = '/exception',
        f = () => {
          var e;
          if (E) return E;
          var r = n['a'].applyPlugins({
              key: 'request',
              type: v['ApplyPluginsType'].modify,
              initialValue: {},
            }),
            a =
              (null === (e = r.errorConfig) || void 0 === e
                ? void 0
                : e.adaptor) || (e => e);
          (E = Object(p['a'])(
            Object(d['a'])(
              {
                errorHandler: e => {
                  var n, o, i, c;
                  if (
                    null === e ||
                    void 0 === e ||
                    null === (n = e.request) ||
                    void 0 === n ||
                    null === (o = n.options) ||
                    void 0 === o
                      ? void 0
                      : o.skipErrorHandler
                  )
                    throw e;
                  if ('ResponseError' === e.name && e.data && e.request) {
                    var d,
                      p = { req: e.request, res: e.response };
                    (c = a(e.data, p)),
                      (e.message =
                        (null === (d = c) || void 0 === d
                          ? void 0
                          : d.errorMessage) || e.message),
                      (e.data = e.data),
                      (e.info = c);
                  }
                  if (((c = e.info), c)) {
                    var v,
                      E,
                      f,
                      b =
                        null === (v = c) || void 0 === v
                          ? void 0
                          : v.errorMessage,
                      R =
                        null === (E = c) || void 0 === E ? void 0 : E.errorCode,
                      I =
                        (null === (f = r.errorConfig) || void 0 === f
                          ? void 0
                          : f.errorPage) || m;
                    switch (
                      null === (i = c) || void 0 === i ? void 0 : i.showType
                    ) {
                      case t.SILENT:
                        break;
                      case t.WARN_MESSAGE:
                        u['a'].warn(b);
                        break;
                      case t.ERROR_MESSAGE:
                        u['a'].error(b);
                        break;
                      case t.NOTIFICATION:
                        l['a'].open({ message: b });
                        break;
                      case t.REDIRECT:
                        s['b'].push({
                          pathname: I,
                          query: { errorCode: R, errorMessage: b },
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
              r,
            ),
          )),
            E.use(
              (function() {
                var e = Object(c['a'])(
                  i.a.mark(function e(r, t) {
                    var s, n, o, c, l, u, d, p;
                    return i.a.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t();
                          case 2:
                            if (
                              ((n = r.req),
                              (o = r.res),
                              !(null === (s = n.options) || void 0 === s
                                ? void 0
                                : s.skipErrorHandler))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt('return');
                          case 5:
                            if (
                              ((c = n.options),
                              (l = c.getResponse),
                              (u = l ? o.data : o),
                              (d = a(u, r)),
                              !1 !== d.success)
                            ) {
                              e.next = 15;
                              break;
                            }
                            throw ((p = new Error(d.errorMessage)),
                            (p.name = 'BizError'),
                            (p.data = u),
                            (p.info = d),
                            p);
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(r, a) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          var o = r.middlewares || [];
          o.forEach(e => {
            E.use(e);
          });
          var f = r.requestInterceptors || [],
            b = r.responseInterceptors || [];
          return (
            f.map(e => {
              E.interceptors.request.use(e);
            }),
            b.map(e => {
              E.interceptors.response.use(e);
            }),
            E
          );
        },
        b = (e, r) => {
          var a = f();
          return a(e, r);
        };
      a('qhky');
    },
    NI3x: function(e, r, a) {
      'use strict';
      a.r(r);
      var t = a('tJVT'),
        s = a('q1tI'),
        n = a.n(s),
        o = (a('51T4'), a('9kvl')),
        i = a('06QD');
      r['default'] = () => {
        var e = Object(s['useReducer'])(i['a'], i['b']),
          r = Object(t['a'])(e, 2),
          a = r[0],
          c = r[1],
          l = e => {
            c({ type: 'DEl_CART', payload: e });
          };
        return n.a.createElement(
          'div',
          { className: 'result-page-root' },
          n.a.createElement(
            'div',
            { className: 'page-header' },
            n.a.createElement('i', { className: 'success-icon' }),
          ),
          n.a.createElement(
            'div',
            { className: 'page-body' },
            n.a.createElement(
              'div',
              { className: 'title' },
              '\u8d2d\u4e70\u6210\u529f',
            ),
            a.list.map(e =>
              n.a.createElement(
                'div',
                { className: 'cart-cell', key: e.timeId },
                n.a.createElement('div', { className: 'cart-bd' }, e.timeId),
                n.a.createElement('div', {
                  className: 'cart-del',
                  onClick: () => {
                    l(e);
                  },
                }),
              ),
            ),
          ),
          n.a.createElement(
            'div',
            { className: 'page-footer' },
            n.a.createElement(
              'button',
              {
                className: 'button',
                onClick: () => {
                  o['a'].push('/');
                },
              },
              '\u9996\u9875',
            ),
          ),
        );
      };
    },
  },
]);
