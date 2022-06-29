import axios, { AxiosError } from 'axios';

const URL_PATH = `http://localhost:${process.env.CLIENT_PORT}/api`;
const ACTIVATE_EFFECT_URL = `${URL_PATH}/effect/activate`

export function ToggleEffect(effect_name: string, status: boolean = true): Promise<string> {
    return new Promise(async (resolve, reject) => {
        axios.post(ACTIVATE_EFFECT_URL, {
            effect: effect_name,
            status
        }).then((data) => {
            const response = data as unknown;
            resolve(response as string);
        }).catch((err: AxiosError) => {
            console.log("Could not start effect")
        })
    })
}

