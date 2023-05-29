import picomatch from 'picomatch';
import { type PluginOption, type ViteDevServer } from 'vite';

export default (options?): PluginOption => ({
  name: 'vite-plugin-full-reload',
  apply: 'serve',
  config: () => ({ server: { watch: { disableGlobbing: false } } }),
  configureServer(server: ViteDevServer) {
    const { watcher, ws } = server;
    const files = Array.isArray(options.files) ? options.files : [options.files];

    const shouldReload = picomatch(files);
    const checkReload = async (path: string) => {
      if (shouldReload)
        if (!!shouldReload && shouldReload(path)) {
          server.moduleGraph.invalidateAll();
        }
    };

    watcher.add(files);
    watcher.on('add', checkReload);
    watcher.on('unlink', checkReload);
  }
});
