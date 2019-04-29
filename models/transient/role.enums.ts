
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
    // switch between ControlCenters
    su_CCSwitch = 'su.CCSwitch',


    // *******************************
    // * component-specific privileges
    // *******************************

    // enables buttons to change the state of a protocol (usually after he was called by the advisor)
    protocol_afterCall = 'protocol.afterCall',


    // **********************
    // * Routing privileges
    // * used to grant access to views
    // ***********************

    route_adminDashboard = 'route.adminDashboard',
    route_createEmergency = 'route.createEmergency',
    route_dashboard = 'route.dashboard',
    route_defibrillator = 'route.defibrillator',
    route_defibrillatorManagement = 'route.defibrillatorManagement',
    route_emergencyDetail = 'route.emergencyDetail',
    route_emergencyList = 'route.emergencyList',
    route_emergencyMap = 'route.emergencyMap',
    route_firstresponder = 'route.firstresponder',
    route_protocolList = 'route.protocolList',
    route_region = 'route.region',
    route_social = 'route.social',
}
