import Axios from './index';

export const fetchIssues = async () => {
    const url = 'issues/';
    const response = await Axios.get(url);
    return response;
};