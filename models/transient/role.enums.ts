
export enum RoleRestrictionEnum {
    // *******************************
    // * component-specific restrictions
    // *******************************

    // disables edit possibilities in the firstresponder view
    firstresponder_readonly = 'firstresponder.readonly'
}

export enum RolePrivilegeEnum {
    // **********************
    // * SuperUser privileges
    // ***********************

    // all existing privileges
    su_any = 'su.any',


    // *******************************
    // * component-specific privileges
    // *******************************


    // **********************
    // * Routing privileges
    // * used to grant access to views
    // ***********************

    tab_moderate = 'tab.moderate',
}
