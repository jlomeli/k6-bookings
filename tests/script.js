import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 5 },
        { duration: '30s', target: 10 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<250']
    }
};

export default function() {
    http.get('https://restful-booker.herokuapp.com/booking/');
    sleep(1)
};
