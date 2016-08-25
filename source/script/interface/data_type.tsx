/**
 * Created by fuhuixiang on 16-8-24.
 */
export type RightBtnType = 'setting' | 'shopCart' | 'add' | 'message' | 'list';
export type LeftBtnType = 'goBack' | 'search';

export type caldetailType = {
    status?: number;
    d: {
        sales: {
            status: number,
            codeb: number,
            lottery_period: number,
            code: number,
            codea: number
        },
        query_url: string,
        codea: number,
        purs: {
            time: string,
            number: string,
            username: string
        }[]
    }
}

export type detailType = {
    c: number,
    d: {detail: string}
}

export type goodType = {
    sid: number,
    icon: string,
    gid: number,
    title: string,
    status: number,
    total: number,
    purchase: number,
    description: string,
    remain: number,
    prize: {
        headimg: string,
        username: string,
        phone: string,
        ip_address: string,
        buy: number,
        prize_time: number,
        code: number
    }
}

export type userType = {
    buy_date: string,
    ordernum: number,
    headimg: string,
    username: string,
    ip_address: string,
    ip: string,
    buy: number,
    buy_time: number
}

export type bannerType = {
    url: string,
    img: string
}

export type rechargeType = {
    status: number,
    id: number,
    pay_type_name: string,
    create_time: string,
    price: number
}

export type pushGoodType = {
    type: number,
    time: number,
    icon: string,
    title: string,
    total: number,
    user_name: string,
    remain: number,
    luck_code: number,
    user_icon: string
}

export type redpackType = {
    enable: number,
    id: number,
    price: number,
    restrict_money: number,
    title: string,
    is_valid: number,
    description: string,
    start_time: number,
    expire_time: number
}

export type shareType = {
    icon: string[],
    user_icon: string,
    user_name: string,
    join_num: number,
    luck_code: number,
    time: string,
    luck_num: number,
    sid: number
}

export type shopCartType = {
    key: string,
    gid: number,
    period: number,
    title: string,
    sid: number,
    icon: string,
    total: number,
    purchase: number,
    notice: number
}

export type footerType = {
    className: string,
    act: boolean,
    name: string,
    link: string
}
