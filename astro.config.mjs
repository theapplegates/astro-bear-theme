import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import { Picture } from '@astrojs/image/components';
import localImage from '/assets/Gulfstream-G400.jpg';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [image(), mdx(), sitemap()],
});
