(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    '9kvl': function(e, r, a) {
      'use strict';
      a.d(r, 'a', function() {
        return s['b'];
      }),
        a.d(r, 'b', function() {
          return i['a'];
        }),
        a.d(r, 'c', function() {
          return k;
        });
      var t,
        s = a('FfOG'),
        i = a('bCY9'),
        n = (a('I5X1'), a('WmNS')),
        o = a.n(n),
        l = a('9og8'),
        c = (a('/xke'), a('TeRw')),
        u = (a('miYZ'), a('tsqr')),
        d = (a('PpiC'), a('k1fw')),
        m = a('io9h'),
        p = a('LtsZ');
      a('0iz5');
      (function(e) {
        (e[(e['SILENT'] = 0)] = 'SILENT'),
          (e[(e['WARN_MESSAGE'] = 1)] = 'WARN_MESSAGE'),
          (e[(e['ERROR_MESSAGE'] = 2)] = 'ERROR_MESSAGE'),
          (e[(e['NOTIFICATION'] = 4)] = 'NOTIFICATION'),
          (e[(e['REDIRECT'] = 9)] = 'REDIRECT');
      })(t || (t = {}));
      var v,
        E = '/exception',
        f = () => {
          var e;
          if (v) return v;
          var r = i['a'].applyPlugins({
              key: 'request',
              type: p['ApplyPluginsType'].modify,
              initialValue: {},
            }),
            a =
              (null === (e = r.errorConfig) || void 0 === e
                ? void 0
                : e.adaptor) || (e => e);
          (v = Object(m['a'])(
            Object(d['a'])(
              {
                errorHandler: e => {
                  var i, n, o, l;
                  if (
                    null === e ||
                    void 0 === e ||
                    null === (i = e.request) ||
                    void 0 === i ||
                    null === (n = i.options) ||
                    void 0 === n
                      ? void 0
                      : n.skipErrorHandler
                  )
                    throw e;
                  if ('ResponseError' === e.name && e.data && e.request) {
                    var d,
                      m = { req: e.request, res: e.response };
                    (l = a(e.data, m)),
                      (e.message =
                        (null === (d = l) || void 0 === d
                          ? void 0
                          : d.errorMessage) || e.message),
                      (e.data = e.data),
                      (e.info = l);
                  }
                  if (((l = e.info), l)) {
                    var p,
                      v,
                      f,
                      k =
                        null === (p = l) || void 0 === p
                          ? void 0
                          : p.errorMessage,
                      N =
                        null === (v = l) || void 0 === v ? void 0 : v.errorCode,
                      b =
                        (null === (f = r.errorConfig) || void 0 === f
                          ? void 0
                          : f.errorPage) || E;
                    switch (
                      null === (o = l) || void 0 === o ? void 0 : o.showType
                    ) {
                      case t.SILENT:
                        break;
                      case t.WARN_MESSAGE:
                        u['a'].warn(k);
                        break;
                      case t.ERROR_MESSAGE:
                        u['a'].error(k);
                        break;
                      case t.NOTIFICATION:
                        c['a'].open({ message: k });
                        break;
                      case t.REDIRECT:
                        s['b'].push({
                          pathname: b,
                          query: { errorCode: N, errorMessage: k },
                        });
                        break;
                      default:
                        u['a'].error(k);
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
            v.use(
              (function() {
                var e = Object(l['a'])(
                  o.a.mark(function e(r, t) {
                    var s, i, n, l, c, u, d, m;
                    return o.a.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t();
                          case 2:
                            if (
                              ((i = r.req),
                              (n = r.res),
                              !(null === (s = i.options) || void 0 === s
                                ? void 0
                                : s.skipErrorHandler))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt('return');
                          case 5:
                            if (
                              ((l = i.options),
                              (c = l.getResponse),
                              (u = c ? n.data : n),
                              (d = a(u, r)),
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
                return function(r, a) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          var n = r.middlewares || [];
          n.forEach(e => {
            v.use(e);
          });
          var f = r.requestInterceptors || [],
            k = r.responseInterceptors || [];
          return (
            f.map(e => {
              v.interceptors.request.use(e);
            }),
            k.map(e => {
              v.interceptors.response.use(e);
            }),
            v
          );
        },
        k = (e, r) => {
          var a = f();
          return a(e, r);
        };
      a('qhky');
    },
    Dk45: function(e, r, a) {},
    FCkD: function(e, r, a) {
      'use strict';
      a.r(r);
      var t = a('tJVT'),
        s = a('q1tI'),
        i = a.n(s),
        n = (a('Dk45'), a('9kvl'));
      function o() {
        var e = Object(s['useState'])([]),
          r = Object(t['a'])(e, 2),
          a = r[0],
          o = r[1],
          l = () => {
            Object(n['c'])('/api/home').then(e => {
              o(e.list);
            });
          };
        Object(s['useEffect'])(() => {
          l();
        }, []);
        var c = a.map(e =>
          i.a.createElement(
            'div',
            {
              key: e.id,
              className: 'item',
              onClick: () => {
                n['a'].push({ pathname: '/detail', query: { id: e.id } });
              },
            },
            i.a.createElement(
              'div',
              { className: 'item-img' },
              i.a.createElement('img', { src: e.img, alt: '' }),
            ),
            i.a.createElement(
              'div',
              { className: 'item-info' },
              i.a.createElement('div', { className: 'item-title' }, e.title),
              i.a.createElement('div', { className: 'item-subtitle' }, e.desc),
              i.a.createElement(
                'div',
                { className: 'item-more' },
                e.slide.map(e =>
                  i.a.createElement(
                    'div',
                    { className: 'cell', key: e.id },
                    i.a.createElement(
                      'div',
                      { className: 'cell-img' },
                      i.a.createElement('img', { src: e.img, alt: '' }),
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'cell-title' },
                      e.title,
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'price' },
                      e.price.toFixed(2),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
        return i.a.createElement('div', { className: 'list' }, c);
      }
      r['default'] = () =>
        i.a.createElement(
          'div',
          { className: 'home-page' },
          i.a.createElement(o, null),
        );
    },
  },
]);
