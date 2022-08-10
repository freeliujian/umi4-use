
import { defineConfig } from 'umi';
import packages from './package.json';

export default defineConfig({
  npmClient: 'pnpm',
  title:`${packages.name}`,
  cssMinifier: 'esbuild',
  deadCode:{},
  define:{
    Packages: packages,
  },
  antd:{}
});
