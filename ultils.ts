import {get} from "lodash"
import moment from "moment";
import parseISO from "date-fns/parseISO";


export const randomId = () => Math.floor(Math.random() * 10000000);

export const IsArray = (items: any) => {
    if (!items) return false
    return (Array.isArray(items) && items.length > 0) ? true : false
}