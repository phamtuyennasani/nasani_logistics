const Ziggy = {"url":"https:\/\/logisticsnasani.info","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["GET","HEAD"]},"manage":{"uri":"quan-ly-don-hang","methods":["GET","HEAD"]},"createorder":{"uri":"tao-don-nhanh","methods":["GET","HEAD"]},"qlcongno":{"uri":"quan-ly-cong-no","methods":["GET","HEAD"]},"qltai":{"uri":"quan-ly-tai","methods":["GET","HEAD"]},"thongke":{"uri":"thong-ke","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
