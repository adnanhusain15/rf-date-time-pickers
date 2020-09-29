import { FormikValues } from "formik";
import { FormConfig } from "../MUIDateTimePicker";
export declare type TFieldConditions = {
    hidden?: boolean;
    logicOpn?: string;
    defaultProps?: object;
    postEffectProps?: object;
    values?: ConditionCompareItem[];
};
interface ConditionCompareItem {
    key: string;
    compareValue: string;
    operator: string;
}
export interface IConditionalProps {
    hidden?: boolean;
    finalProps?: object;
}
export declare const getConditionalProps: (itemConfig: FormConfig, formikProps: FormikValues) => {
    finalProps: object | undefined;
    hidden?: undefined;
} | {
    finalProps: object | undefined;
    hidden: boolean;
};
export {};
