// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
  // the dev toolbar sits on top of the Win95 taskbar
  devToolbar: { enabled: false },
});
