import { Client } from '@notionhq/client';

export const notion = new Client({ auth: process.env.NOTION_API_KEY });
export const databaseId = process.env.NOTION_PAGE_ID;