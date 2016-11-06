/**
 * Created by fuhuixiang on 16-8-24.
 */
import {RightBtnType, LeftBtnType} from './data_type';

export interface CaldetailProps {
    params?: {sid: number};
}

export interface DetailInfoProps {
    params: {gid: number};
}

export interface addressProps {
    params: {type: string};
}

export interface GoodInfoProps {
    params?: {sid: number};
    userList: any;
}

export interface UserListProps {
    userList: any;
}

export interface GoodProps {
    params?: {type: string};
}

export interface BannerProps {
    bannerLists?: {url: string, img: string}[];
}

export interface GoodListProps {
    goodLists: {
        sid: number,
        icon: string,
        description: string,
        title: string,
        total: number,
        remain: number
    }[];
}

export interface digLogProps {
    handleHidden?: Function;
    handleInvited?: Function;
}

export interface OrderListProps {
    params?: {gid: number};
}

export interface PrizeProps {
    params?: {sid: number};
}

export interface OrderProps {
    params?: {sid: number};
}

export interface footerProps {
    act: 'home' | 'publish' | 'share' | 'list' | 'me';
}

export interface headerProps {
    title?: string;
    toRight?: RightBtnType;
    toLeft?: LeftBtnType;
}

export interface inlineLinkProps {
    toContent?: string;
    toLink?: string;
    icon?: string;
}

export interface frameProps {
    params?: {frame: string};
}

export interface scrollProps {
    showHandle: Function;
    listen: boolean;
}
