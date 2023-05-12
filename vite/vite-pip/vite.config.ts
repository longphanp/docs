import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {
  console.log(mode, command, ssrBuild);
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
    root: process.cwd(),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [react()],
    server: {
      host: "localhost",
      port: 3000,
    },
  };
});
