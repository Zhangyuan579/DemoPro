/**
 *
 * 数据库
 */
import {Platform} from "react-native";

import Realm from 'realm';
import {UserSchema} from "./schema_user";
import {CardSchema} from "./schema_card";
import {GestureSchema} from "./schema_gesture";

// export const MySchemas = [UserSchema, CardSchema];

export default new Realm({
    schemaVersion: 1,
    schema: [UserSchema, CardSchema,GestureSchema],
    // path: Platform.OS==='ios'?'/Users/zerowolf/Desktop/realmDB/myModel.realm':'/data/data/com.ltwallet/files/default.realm',
});

