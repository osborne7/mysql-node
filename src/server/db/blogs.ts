import { Query } from './index';

const all = async () => Query('SELECT * FROM blogs');

const one = async (id: string) => Query('SELECT * FROM blogs where id = ?', [id]);

export default {
    all,
    one
}