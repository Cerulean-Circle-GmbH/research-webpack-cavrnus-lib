/// <reference types="node" />
import _m0, { Writer, Reader } from 'protobufjs/minimal';
import * as stream from 'stream';
import * as ste_simple_events from 'ste-simple-events';
import { ISimpleEvent } from 'ste-simple-events';

declare type LoginType = 'none' | 'user' | 'admin';
declare class CavrnusApi {
    readonly customerDomain: string | undefined;
    readonly apiHost: URL;
    protected constructor(apiHost: URL, customerSubdomain: string | undefined);
    get loginType(): LoginType;
    apiRoot(): string;
    headers(): any;
    static fromDomain(fulldomain: string): CavrnusApi;
    static fromDomainAndCustomer(apihost: string, customerSubdomain: string): CavrnusApi;
    withUserAuth(authToken: string): CavrnusApiUser;
    toAbsoluteUrl(serverProvidedUrl: string): string;
}
declare class CavrnusApiAuthorized extends CavrnusApi {
    readonly authToken: string;
    protected constructor(root: CavrnusApi, auth: string);
}
declare class CavrnusApiUser extends CavrnusApiAuthorized {
    userBrand: void;
    protected constructor(root: CavrnusApi, auth: string);
    get loginType(): LoginType;
    apiRoot(): string;
    headers(): any;
    static fromApiAndAuth(api: CavrnusApi, auth: string): CavrnusApiUser;
    static fromDomainAndAuth(fulldomain: string, auth: string): CavrnusApiUser;
    static fromDomainAndCustomerAndAuth(apihost: string, customerSubdomain: string, auth: string): CavrnusApi;
}
interface IdResult {
    _id: string;
}

declare const protobufPackage$9 = "Journal";
/** JournalEntryRaw is identical to JournalEntry, except that the Op is stored as a raw buffer rather than as a finalized message. This is used to relieve journal processing time when the full data is not required. These messages are what is ultimately stored in the database. */
interface JournalEntryRaw {
    id: string;
    entryStorage: Uint8Array;
}
declare const JournalEntryRaw: {
    encode(message: JournalEntryRaw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JournalEntryRaw;
    fromJSON(object: any): JournalEntryRaw;
    toJSON(message: JournalEntryRaw): unknown;
    fromPartial(object: DeepPartial$f<JournalEntryRaw>): JournalEntryRaw;
};
interface JournalEntryV1RawObsolete {
    /** Unique identifier and timestamp of this operation. */
    time?: Date;
    /** The connectionId of the user that issued this operation. */
    connectionId?: string | undefined;
    op: Uint8Array;
    /** If present, implies this journal entry represents the completion of a transient operation. */
    consumedTransientUniqueId?: string | undefined;
}
declare const JournalEntryV1RawObsolete: {
    encode(message: JournalEntryV1RawObsolete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JournalEntryV1RawObsolete;
    fromJSON(object: any): JournalEntryV1RawObsolete;
    toJSON(message: JournalEntryV1RawObsolete): unknown;
    fromPartial(object: DeepPartial$f<JournalEntryV1RawObsolete>): JournalEntryV1RawObsolete;
};
/** This is the type serialized into the database, it does not contain the id as that is set by the database. */
interface JournalEntryStorage {
    /** Unique identifier and timestamp of this operation. */
    time?: Date;
    /** The connectionId of the user that issued this operation. */
    connectionId?: string | undefined;
    op: Uint8Array;
    /** If present, implies this journal entry represents the completion of a transient operation. */
    consumedTransientUniqueId?: string | undefined;
}
declare const JournalEntryStorage: {
    encode(message: JournalEntryStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JournalEntryStorage;
    fromJSON(object: any): JournalEntryStorage;
    toJSON(message: JournalEntryStorage): unknown;
    fromPartial(object: DeepPartial$f<JournalEntryStorage>): JournalEntryStorage;
};
/**
 * JournalRaw is the full journal but composed of JournalEntryRaw, which have an unprocessed Operation op. JournalRaw is what is by default
 * received by requests to our servers, and need to be resolved into a Journal to be useful.
 */
interface JournalRaw {
    /** binary serialized Journal.EntryRaw */
    rawEntries?: JournalEntryRaw[];
}
declare const JournalRaw: {
    encode(message: JournalRaw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JournalRaw;
    fromJSON(object: any): JournalRaw;
    toJSON(message: JournalRaw): unknown;
    fromPartial(object: DeepPartial$f<JournalRaw>): JournalRaw;
};
declare type Builtin$f = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$f<T> = T extends Builtin$f ? T : T extends Array<infer U> ? Array<DeepPartial$f<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$f<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$f<T[K]>;
} : Partial<T>;

declare const protobufPackage$8 = "Common";
declare enum ComparisonMethod {
    Equal = 0,
    NotEqual = 1,
    Less = 10,
    LessOrEqual = 11,
    GreaterOrEqual = 20,
    Greater = 21,
    UNRECOGNIZED = -1
}
declare function comparisonMethodFromJSON(object: any): ComparisonMethod;
declare function comparisonMethodToJSON(object: ComparisonMethod): string;
declare enum GenericMessage_V1_Category {
    Log = 0,
    UserMessage = 1,
    CriticalServerMessage = 2,
    ProgramError = 3,
    UNRECOGNIZED = -1
}
declare function genericMessage_V1_CategoryFromJSON(object: any): GenericMessage_V1_Category;
declare function genericMessage_V1_CategoryToJSON(object: GenericMessage_V1_Category): string;
interface Float2 {
    x: number;
    y: number;
}
declare const Float2: {
    encode(message: Float2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Float2;
    fromJSON(object: any): Float2;
    toJSON(message: Float2): unknown;
    fromPartial(object: DeepPartial$e<Float2>): Float2;
};
interface Float2Array {
    f2array: Uint8Array;
}
declare const Float2Array: {
    encode(message: Float2Array, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Float2Array;
    fromJSON(object: any): Float2Array;
    toJSON(message: Float2Array): unknown;
    fromPartial(object: DeepPartial$e<Float2Array>): Float2Array;
};
interface Float3 {
    x: number;
    y: number;
    z: number;
}
declare const Float3: {
    encode(message: Float3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Float3;
    fromJSON(object: any): Float3;
    toJSON(message: Float3): unknown;
    fromPartial(object: DeepPartial$e<Float3>): Float3;
};
interface Float3Array {
    f3array: Uint8Array;
}
declare const Float3Array: {
    encode(message: Float3Array, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Float3Array;
    fromJSON(object: any): Float3Array;
    toJSON(message: Float3Array): unknown;
    fromPartial(object: DeepPartial$e<Float3Array>): Float3Array;
};
interface Float4 {
    x: number;
    y: number;
    z: number;
    w?: number | undefined;
}
declare const Float4: {
    encode(message: Float4, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Float4;
    fromJSON(object: any): Float4;
    toJSON(message: Float4): unknown;
    fromPartial(object: DeepPartial$e<Float4>): Float4;
};
interface Float4Array {
    f4array: Uint8Array;
}
declare const Float4Array: {
    encode(message: Float4Array, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Float4Array;
    fromJSON(object: any): Float4Array;
    toJSON(message: Float4Array): unknown;
    fromPartial(object: DeepPartial$e<Float4Array>): Float4Array;
};
interface AxisAlignedBoundingBox {
    min?: Float3;
    max?: Float3;
}
declare const AxisAlignedBoundingBox: {
    encode(message: AxisAlignedBoundingBox, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AxisAlignedBoundingBox;
    fromJSON(object: any): AxisAlignedBoundingBox;
    toJSON(message: AxisAlignedBoundingBox): unknown;
    fromPartial(object: DeepPartial$e<AxisAlignedBoundingBox>): AxisAlignedBoundingBox;
};
interface Color4 {
    r: number;
    g: number;
    b: number;
    a: number;
}
declare const Color4: {
    encode(message: Color4, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Color4;
    fromJSON(object: any): Color4;
    toJSON(message: Color4): unknown;
    fromPartial(object: DeepPartial$e<Color4>): Color4;
};
interface IntSpan {
    from: number;
    to: number;
}
declare const IntSpan: {
    encode(message: IntSpan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntSpan;
    fromJSON(object: any): IntSpan;
    toJSON(message: IntSpan): unknown;
    fromPartial(object: DeepPartial$e<IntSpan>): IntSpan;
};
interface GenericMessage {
    v1?: GenericMessage_V1 | undefined;
}
declare const GenericMessage: {
    encode(message: GenericMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenericMessage;
    fromJSON(object: any): GenericMessage;
    toJSON(message: GenericMessage): unknown;
    fromPartial(object: DeepPartial$e<GenericMessage>): GenericMessage;
};
interface GenericMessage_V1 {
    category: GenericMessage_V1_Category;
    message: string;
}
declare const GenericMessage_V1: {
    encode(message: GenericMessage_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenericMessage_V1;
    fromJSON(object: any): GenericMessage_V1;
    toJSON(message: GenericMessage_V1): unknown;
    fromPartial(object: DeepPartial$e<GenericMessage_V1>): GenericMessage_V1;
};
interface Ping {
    v1?: Ping_V1 | undefined;
}
declare const Ping: {
    encode(message: Ping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Ping;
    fromJSON(object: any): Ping;
    toJSON(message: Ping): unknown;
    fromPartial(object: DeepPartial$e<Ping>): Ping;
};
interface Ping_V1 {
    sentTime?: Date;
}
declare const Ping_V1: {
    encode(message: Ping_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Ping_V1;
    fromJSON(object: any): Ping_V1;
    toJSON(message: Ping_V1): unknown;
    fromPartial(object: DeepPartial$e<Ping_V1>): Ping_V1;
};
declare type Builtin$e = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$e<T> = T extends Builtin$e ? T : T extends Array<infer U> ? Array<DeepPartial$e<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$e<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$e<T[K]>;
} : Partial<T>;

declare const common_d_AxisAlignedBoundingBox: typeof AxisAlignedBoundingBox;
declare const common_d_Color4: typeof Color4;
type common_d_ComparisonMethod = ComparisonMethod;
declare const common_d_ComparisonMethod: typeof ComparisonMethod;
declare const common_d_Float2: typeof Float2;
declare const common_d_Float2Array: typeof Float2Array;
declare const common_d_Float3: typeof Float3;
declare const common_d_Float3Array: typeof Float3Array;
declare const common_d_Float4: typeof Float4;
declare const common_d_Float4Array: typeof Float4Array;
declare const common_d_GenericMessage: typeof GenericMessage;
declare const common_d_GenericMessage_V1: typeof GenericMessage_V1;
type common_d_GenericMessage_V1_Category = GenericMessage_V1_Category;
declare const common_d_GenericMessage_V1_Category: typeof GenericMessage_V1_Category;
declare const common_d_IntSpan: typeof IntSpan;
declare const common_d_Ping: typeof Ping;
declare const common_d_Ping_V1: typeof Ping_V1;
declare const common_d_comparisonMethodFromJSON: typeof comparisonMethodFromJSON;
declare const common_d_comparisonMethodToJSON: typeof comparisonMethodToJSON;
declare const common_d_genericMessage_V1_CategoryFromJSON: typeof genericMessage_V1_CategoryFromJSON;
declare const common_d_genericMessage_V1_CategoryToJSON: typeof genericMessage_V1_CategoryToJSON;
declare namespace common_d {
  export {
    common_d_AxisAlignedBoundingBox as AxisAlignedBoundingBox,
    common_d_Color4 as Color4,
    common_d_ComparisonMethod as ComparisonMethod,
    DeepPartial$e as DeepPartial,
    common_d_Float2 as Float2,
    common_d_Float2Array as Float2Array,
    common_d_Float3 as Float3,
    common_d_Float3Array as Float3Array,
    common_d_Float4 as Float4,
    common_d_Float4Array as Float4Array,
    common_d_GenericMessage as GenericMessage,
    common_d_GenericMessage_V1 as GenericMessage_V1,
    common_d_GenericMessage_V1_Category as GenericMessage_V1_Category,
    common_d_IntSpan as IntSpan,
    common_d_Ping as Ping,
    common_d_Ping_V1 as Ping_V1,
    common_d_comparisonMethodFromJSON as comparisonMethodFromJSON,
    common_d_comparisonMethodToJSON as comparisonMethodToJSON,
    common_d_genericMessage_V1_CategoryFromJSON as genericMessage_V1_CategoryFromJSON,
    common_d_genericMessage_V1_CategoryToJSON as genericMessage_V1_CategoryToJSON,
    protobufPackage$8 as protobufPackage,
  };
}

declare const protobufPackage$7 = "JournalData";
declare enum Progress_V1_ProgressMode {
    Failed = 0,
    Converting = 1,
    Uploading = 2,
    Downloading = 3,
    Decrypting = 4,
    Finished = 5,
    Waiting = 6,
    Processing = 7,
    Loading = 8,
    Fetching = 9,
    Building = 10,
    UNRECOGNIZED = -1
}
declare function progress_V1_ProgressModeFromJSON(object: any): Progress_V1_ProgressMode;
declare function progress_V1_ProgressModeToJSON(object: Progress_V1_ProgressMode): string;
interface ObjectId {
    objId: string;
    component: string;
}
declare const ObjectId: {
    encode(message: ObjectId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectId;
    fromJSON(object: any): ObjectId;
    toJSON(message: ObjectId): unknown;
    fromPartial(object: DeepPartial$d<ObjectId>): ObjectId;
};
interface BoardState {
    frame?: number | undefined;
    frameStart?: number | undefined;
    source?: string | undefined;
}
declare const BoardState: {
    encode(message: BoardState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BoardState;
    fromJSON(object: any): BoardState;
    toJSON(message: BoardState): unknown;
    fromPartial(object: DeepPartial$d<BoardState>): BoardState;
};
/** ProgressMode is just a visual to describe what kind of progress is being displayed */
interface Progress {
    v1?: Progress_V1 | undefined;
    v2?: Progress_V2 | undefined;
}
declare const Progress: {
    encode(message: Progress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Progress;
    fromJSON(object: any): Progress;
    toJSON(message: Progress): unknown;
    fromPartial(object: DeepPartial$d<Progress>): Progress;
};
interface Progress_V1 {
    progressMode: Progress_V1_ProgressMode;
    progressPercentage: number;
}
declare const Progress_V1: {
    encode(message: Progress_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Progress_V1;
    fromJSON(object: any): Progress_V1;
    toJSON(message: Progress_V1): unknown;
    fromPartial(object: DeepPartial$d<Progress_V1>): Progress_V1;
};
interface Progress_V2 {
    taskStack: string[];
    currentDescription: string;
    taskProgress: number;
    overallProgress: number;
}
declare const Progress_V2: {
    encode(message: Progress_V2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Progress_V2;
    fromJSON(object: any): Progress_V2;
    toJSON(message: Progress_V2): unknown;
    fromPartial(object: DeepPartial$d<Progress_V2>): Progress_V2;
};
/** The object will start as a progress op if it needs to upload, then become it's final form once a contentId is ready */
interface ObjectType {
    contentId?: string | undefined;
    whiteboard?: BoardSizeData | undefined;
    streamBoardOwner?: ObjectType_StreamBoardObjectType | undefined;
    userBoard?: boolean | undefined;
    objectProgress?: Progress | undefined;
    boardProgress?: Progress | undefined;
    textboard?: ObjectType_TextBoardObjectType | undefined;
    arTracker?: ObjectType_ArTrackerObjectType | undefined;
    contentIdAsset?: string | undefined;
    customContentId?: ObjectType_CustomContentId | undefined;
    chatMessage?: ObjectType_ChatMessageObjectType | undefined;
    blankMaterial?: boolean | undefined;
}
declare const ObjectType: {
    encode(message: ObjectType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectType;
    fromJSON(object: any): ObjectType;
    toJSON(message: ObjectType): unknown;
    fromPartial(object: DeepPartial$d<ObjectType>): ObjectType;
};
interface ObjectType_StreamBoardObjectType {
    connectionId: string;
    userId: string;
}
declare const ObjectType_StreamBoardObjectType: {
    encode(message: ObjectType_StreamBoardObjectType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectType_StreamBoardObjectType;
    fromJSON(object: any): ObjectType_StreamBoardObjectType;
    toJSON(message: ObjectType_StreamBoardObjectType): unknown;
    fromPartial(object: DeepPartial$d<ObjectType_StreamBoardObjectType>): ObjectType_StreamBoardObjectType;
};
interface ObjectType_TextBoardObjectType {
    initialText: string;
    textboard?: BoardSizeData;
}
declare const ObjectType_TextBoardObjectType: {
    encode(message: ObjectType_TextBoardObjectType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectType_TextBoardObjectType;
    fromJSON(object: any): ObjectType_TextBoardObjectType;
    toJSON(message: ObjectType_TextBoardObjectType): unknown;
    fromPartial(object: DeepPartial$d<ObjectType_TextBoardObjectType>): ObjectType_TextBoardObjectType;
};
interface ObjectType_ArTrackerObjectType {
    contentId: string;
}
declare const ObjectType_ArTrackerObjectType: {
    encode(message: ObjectType_ArTrackerObjectType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectType_ArTrackerObjectType;
    fromJSON(object: any): ObjectType_ArTrackerObjectType;
    toJSON(message: ObjectType_ArTrackerObjectType): unknown;
    fromPartial(object: DeepPartial$d<ObjectType_ArTrackerObjectType>): ObjectType_ArTrackerObjectType;
};
interface ObjectType_CustomContentId {
    customSourceId: string;
    customContentId: string;
}
declare const ObjectType_CustomContentId: {
    encode(message: ObjectType_CustomContentId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectType_CustomContentId;
    fromJSON(object: any): ObjectType_CustomContentId;
    toJSON(message: ObjectType_CustomContentId): unknown;
    fromPartial(object: DeepPartial$d<ObjectType_CustomContentId>): ObjectType_CustomContentId;
};
interface ObjectType_ChatMessageObjectType {
    initialText: string;
    timeCreated?: Date;
    creatorId?: string | undefined;
}
declare const ObjectType_ChatMessageObjectType: {
    encode(message: ObjectType_ChatMessageObjectType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectType_ChatMessageObjectType;
    fromJSON(object: any): ObjectType_ChatMessageObjectType;
    toJSON(message: ObjectType_ChatMessageObjectType): unknown;
    fromPartial(object: DeepPartial$d<ObjectType_ChatMessageObjectType>): ObjectType_ChatMessageObjectType;
};
interface BoardSizeData {
    aspectRatio?: Float2;
    boardSizeScaler: number;
}
declare const BoardSizeData: {
    encode(message: BoardSizeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BoardSizeData;
    fromJSON(object: any): BoardSizeData;
    toJSON(message: BoardSizeData): unknown;
    fromPartial(object: DeepPartial$d<BoardSizeData>): BoardSizeData;
};
/** The image will start as a progress op if it needs to upload, then become it's final form once a contentId is ready */
interface ImageContentType {
    contentId?: string | undefined;
    imageProgress?: Progress | undefined;
}
declare const ImageContentType: {
    encode(message: ImageContentType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageContentType;
    fromJSON(object: any): ImageContentType;
    toJSON(message: ImageContentType): unknown;
    fromPartial(object: DeepPartial$d<ImageContentType>): ImageContentType;
};
interface Image2dPlacementData {
    objectId?: ObjectId;
    visibleWithinState?: BoardState;
    point?: Float2;
    height: number;
    rotation: number;
}
declare const Image2dPlacementData: {
    encode(message: Image2dPlacementData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image2dPlacementData;
    fromJSON(object: any): Image2dPlacementData;
    toJSON(message: Image2dPlacementData): unknown;
    fromPartial(object: DeepPartial$d<Image2dPlacementData>): Image2dPlacementData;
};
interface TagPlacementData {
    objectId?: ObjectId;
    anchorPos?: Float3;
    tagOffset?: Float3;
    height: number;
}
declare const TagPlacementData: {
    encode(message: TagPlacementData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TagPlacementData;
    fromJSON(object: any): TagPlacementData;
    toJSON(message: TagPlacementData): unknown;
    fromPartial(object: DeepPartial$d<TagPlacementData>): TagPlacementData;
};
/** Rotation refers to Euler Angles */
interface ObjectPlacementData {
    position?: Float3;
    rotation?: Float3;
    scale?: Float3;
}
declare const ObjectPlacementData: {
    encode(message: ObjectPlacementData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectPlacementData;
    fromJSON(object: any): ObjectPlacementData;
    toJSON(message: ObjectPlacementData): unknown;
    fromPartial(object: DeepPartial$d<ObjectPlacementData>): ObjectPlacementData;
};
/** This refers to a shader we place on an object or part to highlight it temorarily */
interface PartHighlightData {
    primaryColor?: Color4;
    secondaryColor?: Color4;
    spread: number;
    speed: number;
    coverage: number;
    edging: number;
    riseTime: number;
    holdTime: number;
    fallTime: number;
}
declare const PartHighlightData: {
    encode(message: PartHighlightData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PartHighlightData;
    fromJSON(object: any): PartHighlightData;
    toJSON(message: PartHighlightData): unknown;
    fromPartial(object: DeepPartial$d<PartHighlightData>): PartHighlightData;
};
/** The skybox will start as a progress op if it needs to upload, then become it's final form once a contentId is ready */
interface LightingEnvironmentContentType {
    contentId?: string | undefined;
    imageProgress?: Progress | undefined;
}
declare const LightingEnvironmentContentType: {
    encode(message: LightingEnvironmentContentType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LightingEnvironmentContentType;
    fromJSON(object: any): LightingEnvironmentContentType;
    toJSON(message: LightingEnvironmentContentType): unknown;
    fromPartial(object: DeepPartial$d<LightingEnvironmentContentType>): LightingEnvironmentContentType;
};
declare type Builtin$d = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$d<T> = T extends Builtin$d ? T : T extends Array<infer U> ? Array<DeepPartial$d<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$d<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$d<T[K]>;
} : Partial<T>;

declare const journaldata_d_BoardSizeData: typeof BoardSizeData;
declare const journaldata_d_BoardState: typeof BoardState;
declare const journaldata_d_Image2dPlacementData: typeof Image2dPlacementData;
declare const journaldata_d_ImageContentType: typeof ImageContentType;
declare const journaldata_d_LightingEnvironmentContentType: typeof LightingEnvironmentContentType;
declare const journaldata_d_ObjectId: typeof ObjectId;
declare const journaldata_d_ObjectPlacementData: typeof ObjectPlacementData;
declare const journaldata_d_ObjectType: typeof ObjectType;
declare const journaldata_d_ObjectType_ArTrackerObjectType: typeof ObjectType_ArTrackerObjectType;
declare const journaldata_d_ObjectType_ChatMessageObjectType: typeof ObjectType_ChatMessageObjectType;
declare const journaldata_d_ObjectType_CustomContentId: typeof ObjectType_CustomContentId;
declare const journaldata_d_ObjectType_StreamBoardObjectType: typeof ObjectType_StreamBoardObjectType;
declare const journaldata_d_ObjectType_TextBoardObjectType: typeof ObjectType_TextBoardObjectType;
declare const journaldata_d_PartHighlightData: typeof PartHighlightData;
declare const journaldata_d_Progress: typeof Progress;
declare const journaldata_d_Progress_V1: typeof Progress_V1;
type journaldata_d_Progress_V1_ProgressMode = Progress_V1_ProgressMode;
declare const journaldata_d_Progress_V1_ProgressMode: typeof Progress_V1_ProgressMode;
declare const journaldata_d_Progress_V2: typeof Progress_V2;
declare const journaldata_d_TagPlacementData: typeof TagPlacementData;
declare const journaldata_d_progress_V1_ProgressModeFromJSON: typeof progress_V1_ProgressModeFromJSON;
declare const journaldata_d_progress_V1_ProgressModeToJSON: typeof progress_V1_ProgressModeToJSON;
declare namespace journaldata_d {
  export {
    journaldata_d_BoardSizeData as BoardSizeData,
    journaldata_d_BoardState as BoardState,
    DeepPartial$d as DeepPartial,
    journaldata_d_Image2dPlacementData as Image2dPlacementData,
    journaldata_d_ImageContentType as ImageContentType,
    journaldata_d_LightingEnvironmentContentType as LightingEnvironmentContentType,
    journaldata_d_ObjectId as ObjectId,
    journaldata_d_ObjectPlacementData as ObjectPlacementData,
    journaldata_d_ObjectType as ObjectType,
    journaldata_d_ObjectType_ArTrackerObjectType as ObjectType_ArTrackerObjectType,
    journaldata_d_ObjectType_ChatMessageObjectType as ObjectType_ChatMessageObjectType,
    journaldata_d_ObjectType_CustomContentId as ObjectType_CustomContentId,
    journaldata_d_ObjectType_StreamBoardObjectType as ObjectType_StreamBoardObjectType,
    journaldata_d_ObjectType_TextBoardObjectType as ObjectType_TextBoardObjectType,
    journaldata_d_PartHighlightData as PartHighlightData,
    journaldata_d_Progress as Progress,
    journaldata_d_Progress_V1 as Progress_V1,
    journaldata_d_Progress_V1_ProgressMode as Progress_V1_ProgressMode,
    journaldata_d_Progress_V2 as Progress_V2,
    journaldata_d_TagPlacementData as TagPlacementData,
    journaldata_d_progress_V1_ProgressModeFromJSON as progress_V1_ProgressModeFromJSON,
    journaldata_d_progress_V1_ProgressModeToJSON as progress_V1_ProgressModeToJSON,
    protobufPackage$7 as protobufPackage,
  };
}

declare enum KeyframeLoopingEnum {
    Clamp = 0,
    Loop = 1,
    LoopOffset = 2,
    Mirror = 3,
    UNRECOGNIZED = -1
}
declare enum TangentsAutocomputeMethodEnum {
    Zero = 0,
    Linear = 1,
    Cubic = 2,
    UNRECOGNIZED = -1
}
declare enum PropertyMetadata_PropertySync {
    Full = 0,
    Transient = 1,
    Local = 2,
    UNRECOGNIZED = -1
}
declare enum ScalarPropertyAssignment_ScalarPropertyMethod {
    Overriding = 0,
    Additive = 1,
    UNRECOGNIZED = -1
}
declare enum ScalarEditingMetadata_ScalarInterpretationEnum {
    Standard = 0,
    Time = 1,
    Playback = 3,
    Scaler = 4,
    UNRECOGNIZED = -1
}
declare enum LinkContentTypeSpecifier_TextureType {
    AllTextures = 0,
    ColorMaps = 1,
    NormalMaps = 2,
    Skyboxes = 3,
    ArTrackers = 4,
    Profiles = 5,
    UNRECOGNIZED = -1
}
declare enum LinkContentTypeSpecifier_MaterialType {
    AllMaterials = 0,
    UNRECOGNIZED = -1
}
declare enum VectorPropertyAssignment_VectorPropertyMethod {
    Overriding = 0,
    Additive = 1,
    UNRECOGNIZED = -1
}
declare enum VectorPropertyKeyframed_VectorInterpolationMethod {
    /** Cartesian - For points. */
    Cartesian = 0,
    /** Spherical - For slerping vector directions. */
    Spherical = 1,
    /** Quaternion - For quats. */
    Quaternion = 2,
    UNRECOGNIZED = -1
}
declare enum VectorEditingMetadata_VectorInterpretationEnum {
    /** Point - For points. (3d) */
    Point = 0,
    /** Direction - For directions. (3d) */
    Direction = 1,
    /** Eulers - For euler angles (ZXY 3d) */
    Eulers = 2,
    /** Scale - For multiplyin (3d) */
    Scale = 3,
    /** Quaternion - For quats. (4d) */
    Quaternion = 4,
    /** Point2D - for points (2d) */
    Point2D = 5,
    /** Direction2D - for vectors (2d) */
    Direction2D = 6,
    /** Scale2D - for multipyin (2d) */
    Scale2D = 7,
    /** OffsetScale - For uv offset/scale pairings (2d/2d in 4d) */
    OffsetScale = 10,
    UNRECOGNIZED = -1
}
declare enum ColorPropertyAssignment_ColorPropertyMethod {
    Overriding = 0,
    Additive = 1,
    UNRECOGNIZED = -1
}
interface PropertyIdentifier {
    id: string;
}
declare const PropertyIdentifier: {
    encode(message: PropertyIdentifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PropertyIdentifier;
    fromJSON(object: any): PropertyIdentifier;
    toJSON(message: PropertyIdentifier): unknown;
    fromPartial(object: DeepPartial$c<PropertyIdentifier>): PropertyIdentifier;
};
interface AnyPropertyValue {
    scalar?: ScalarPropertyValue | undefined;
    string?: StringPropertyValue | undefined;
    vector?: VectorPropertyValue | undefined;
    color?: ColorPropertyValue | undefined;
    transform?: TransformSet | undefined;
    transUpdate?: TransformUpdate | undefined;
    bool?: BooleanPropertyValue | undefined;
    json?: JsonPropertyValue | undefined;
    link?: LinkPropertyValue | undefined;
}
declare const AnyPropertyValue: {
    encode(message: AnyPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnyPropertyValue;
    fromJSON(object: any): AnyPropertyValue;
    toJSON(message: AnyPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<AnyPropertyValue>): AnyPropertyValue;
};
interface GeneratorMetadata {
    name: string;
    description?: string | undefined;
    hidden?: boolean | undefined;
}
declare const GeneratorMetadata: {
    encode(message: GeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GeneratorMetadata;
    fromJSON(object: any): GeneratorMetadata;
    toJSON(message: GeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<GeneratorMetadata>): GeneratorMetadata;
};
interface PropertyMetadata {
    name: string;
    category?: string | undefined;
    categoryOrder?: number | undefined;
    description: string;
    isReadonly?: boolean | undefined;
    internalOrder?: number | undefined;
    syncMethod?: PropertyMetadata_PropertySync | undefined;
    isAdvanced?: boolean | undefined;
    uiVisibility?: BooleanPropertyValue | undefined;
}
declare const PropertyMetadata: {
    encode(message: PropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PropertyMetadata;
    fromJSON(object: any): PropertyMetadata;
    toJSON(message: PropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<PropertyMetadata>): PropertyMetadata;
};
interface AnyPropertyDeclaration {
    scalar?: ScalarPropertyDeclaration | undefined;
    string?: StringPropertyDeclaration | undefined;
    vector?: VectorPropertyDeclaration | undefined;
    color?: ColorPropertyDeclaration | undefined;
    transform?: TransformPropertyDeclaration | undefined;
    boolean?: BooleanPropertyDeclaration | undefined;
    json?: JsonPropertyDeclaration | undefined;
    link?: LinkPropertyDeclaration | undefined;
}
declare const AnyPropertyDeclaration: {
    encode(message: AnyPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnyPropertyDeclaration;
    fromJSON(object: any): AnyPropertyDeclaration;
    toJSON(message: AnyPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<AnyPropertyDeclaration>): AnyPropertyDeclaration;
};
interface Interpolation {
    easeOut?: number | undefined;
    easeIn?: number | undefined;
    duration?: number | undefined;
    delay?: number | undefined;
}
declare const Interpolation: {
    encode(message: Interpolation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Interpolation;
    fromJSON(object: any): Interpolation;
    toJSON(message: Interpolation): unknown;
    fromPartial(object: DeepPartial$c<Interpolation>): Interpolation;
};
interface ScalarPropertyAssignment {
    method?: ScalarPropertyAssignment_ScalarPropertyMethod | undefined;
    overridingPriority?: number | undefined;
    assignmentId: string;
    value?: ScalarPropertyValue;
}
declare const ScalarPropertyAssignment: {
    encode(message: ScalarPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyAssignment;
    fromJSON(object: any): ScalarPropertyAssignment;
    toJSON(message: ScalarPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyAssignment>): ScalarPropertyAssignment;
};
interface ScalarPropertyValue {
    constant?: number | undefined;
    ref?: PropertyIdentifier | undefined;
    expr?: string | undefined;
    keyframes?: ScalarPropertyKeyframed | undefined;
    useDefault?: boolean | undefined;
    pulse?: ScalarPropertyPulse | undefined;
    playback?: ScalarPropertyPlayback | undefined;
    playbackBasic?: ScalarPropertyPlaybackBasic | undefined;
    interp?: ScalarPropertyInterpolator | undefined;
    custom?: CustomGeneratorValue | undefined;
}
declare const ScalarPropertyValue: {
    encode(message: ScalarPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyValue;
    fromJSON(object: any): ScalarPropertyValue;
    toJSON(message: ScalarPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyValue>): ScalarPropertyValue;
};
interface ScalarPropertyInterpolator {
    t?: ScalarPropertyValue;
    from?: ScalarPropertyValue;
    to?: ScalarPropertyValue;
    by?: Interpolation;
}
declare const ScalarPropertyInterpolator: {
    encode(message: ScalarPropertyInterpolator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyInterpolator;
    fromJSON(object: any): ScalarPropertyInterpolator;
    toJSON(message: ScalarPropertyInterpolator): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyInterpolator>): ScalarPropertyInterpolator;
};
interface ScalarPropertyPulse {
    tSrc?: ScalarPropertyValue;
    length?: ScalarPropertyValue;
    min?: ScalarPropertyValue;
    max?: ScalarPropertyValue;
}
declare const ScalarPropertyPulse: {
    encode(message: ScalarPropertyPulse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyPulse;
    fromJSON(object: any): ScalarPropertyPulse;
    toJSON(message: ScalarPropertyPulse): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyPulse>): ScalarPropertyPulse;
};
interface ScalarPropertyPlaybackBasic {
    playing: boolean;
    startTime: number;
    speedWhilePlaying: number;
}
declare const ScalarPropertyPlaybackBasic: {
    encode(message: ScalarPropertyPlaybackBasic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyPlaybackBasic;
    fromJSON(object: any): ScalarPropertyPlaybackBasic;
    toJSON(message: ScalarPropertyPlaybackBasic): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyPlaybackBasic>): ScalarPropertyPlaybackBasic;
};
interface ScalarPropertyPlayback {
    tSrc?: ScalarPropertyValue;
    startTime?: ScalarPropertyValue;
    playing?: BooleanPropertyValue;
    speedWhilePlaying: number;
}
declare const ScalarPropertyPlayback: {
    encode(message: ScalarPropertyPlayback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyPlayback;
    fromJSON(object: any): ScalarPropertyPlayback;
    toJSON(message: ScalarPropertyPlayback): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyPlayback>): ScalarPropertyPlayback;
};
interface ScalarPropertyKeyframed {
    tSrc?: ScalarPropertyValue | undefined;
    keys?: ScalarPropertyKeyframed_ScalarKeyframe[];
    looping: KeyframeLoopingEnum;
    tangentGen: TangentsAutocomputeMethodEnum;
}
declare const ScalarPropertyKeyframed: {
    encode(message: ScalarPropertyKeyframed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyKeyframed;
    fromJSON(object: any): ScalarPropertyKeyframed;
    toJSON(message: ScalarPropertyKeyframed): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyKeyframed>): ScalarPropertyKeyframed;
};
interface ScalarPropertyKeyframed_ScalarKeyframe {
    t: number;
    val?: ScalarPropertyValue;
    tangentIn?: number | undefined;
    tangentOut?: number | undefined;
}
declare const ScalarPropertyKeyframed_ScalarKeyframe: {
    encode(message: ScalarPropertyKeyframed_ScalarKeyframe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyKeyframed_ScalarKeyframe;
    fromJSON(object: any): ScalarPropertyKeyframed_ScalarKeyframe;
    toJSON(message: ScalarPropertyKeyframed_ScalarKeyframe): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyKeyframed_ScalarKeyframe>): ScalarPropertyKeyframed_ScalarKeyframe;
};
interface ScalarPropertyDeclaration {
    default: number;
    meta?: ScalarPropertyMetadata;
}
declare const ScalarPropertyDeclaration: {
    encode(message: ScalarPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyDeclaration;
    fromJSON(object: any): ScalarPropertyDeclaration;
    toJSON(message: ScalarPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyDeclaration>): ScalarPropertyDeclaration;
};
interface ScalarEditingMetadata {
    scalarType?: ScalarEditingMetadata_ScalarInterpretationEnum | undefined;
    uiIncrement?: number | undefined;
    /** if min and max present, use slider. */
    uiMinimum?: number | undefined;
    uiMaximum?: number | undefined;
}
declare const ScalarEditingMetadata: {
    encode(message: ScalarEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarEditingMetadata;
    fromJSON(object: any): ScalarEditingMetadata;
    toJSON(message: ScalarEditingMetadata): unknown;
    fromPartial(object: DeepPartial$c<ScalarEditingMetadata>): ScalarEditingMetadata;
};
interface ScalarGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: ScalarEditingMetadata;
}
declare const ScalarGeneratorMetadata: {
    encode(message: ScalarGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarGeneratorMetadata;
    fromJSON(object: any): ScalarGeneratorMetadata;
    toJSON(message: ScalarGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<ScalarGeneratorMetadata>): ScalarGeneratorMetadata;
};
interface ScalarPropertyMetadata {
    base?: PropertyMetadata;
    edit?: ScalarEditingMetadata;
}
declare const ScalarPropertyMetadata: {
    encode(message: ScalarPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalarPropertyMetadata;
    fromJSON(object: any): ScalarPropertyMetadata;
    toJSON(message: ScalarPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<ScalarPropertyMetadata>): ScalarPropertyMetadata;
};
interface StringPropertyAssignment {
    priority?: number | undefined;
    value?: StringPropertyValue;
    assignmentId: string;
}
declare const StringPropertyAssignment: {
    encode(message: StringPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringPropertyAssignment;
    fromJSON(object: any): StringPropertyAssignment;
    toJSON(message: StringPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<StringPropertyAssignment>): StringPropertyAssignment;
};
interface StringPropertyValue {
    constant?: string | undefined;
    formatted?: StringPropertyFormatted | undefined;
    ref?: PropertyIdentifier | undefined;
    expr?: string | undefined;
    useDefault?: boolean | undefined;
    custom?: CustomGeneratorValue | undefined;
}
declare const StringPropertyValue: {
    encode(message: StringPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringPropertyValue;
    fromJSON(object: any): StringPropertyValue;
    toJSON(message: StringPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<StringPropertyValue>): StringPropertyValue;
};
interface StringPropertyFormatted {
    FormatString: string;
    Arguments?: AnyPropertyValue[];
}
declare const StringPropertyFormatted: {
    encode(message: StringPropertyFormatted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringPropertyFormatted;
    fromJSON(object: any): StringPropertyFormatted;
    toJSON(message: StringPropertyFormatted): unknown;
    fromPartial(object: DeepPartial$c<StringPropertyFormatted>): StringPropertyFormatted;
};
interface StringPropertyDeclaration {
    default: string;
    meta?: StringPropertyMetadata;
}
declare const StringPropertyDeclaration: {
    encode(message: StringPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringPropertyDeclaration;
    fromJSON(object: any): StringPropertyDeclaration;
    toJSON(message: StringPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<StringPropertyDeclaration>): StringPropertyDeclaration;
};
interface StringValueEnumerationOption {
    enumValue: string;
    displayText: string;
}
declare const StringValueEnumerationOption: {
    encode(message: StringValueEnumerationOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringValueEnumerationOption;
    fromJSON(object: any): StringValueEnumerationOption;
    toJSON(message: StringValueEnumerationOption): unknown;
    fromPartial(object: DeepPartial$c<StringValueEnumerationOption>): StringValueEnumerationOption;
};
interface StringEditingMetadata {
    /** if empty, not an enum! */
    enumerationOptions?: StringValueEnumerationOption[];
    isScript?: boolean | undefined;
    isMultiLine?: boolean | undefined;
}
declare const StringEditingMetadata: {
    encode(message: StringEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringEditingMetadata;
    fromJSON(object: any): StringEditingMetadata;
    toJSON(message: StringEditingMetadata): unknown;
    fromPartial(object: DeepPartial$c<StringEditingMetadata>): StringEditingMetadata;
};
interface StringGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: StringEditingMetadata | undefined;
}
declare const StringGeneratorMetadata: {
    encode(message: StringGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringGeneratorMetadata;
    fromJSON(object: any): StringGeneratorMetadata;
    toJSON(message: StringGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<StringGeneratorMetadata>): StringGeneratorMetadata;
};
interface StringPropertyMetadata {
    base?: PropertyMetadata;
    edit?: StringEditingMetadata | undefined;
}
declare const StringPropertyMetadata: {
    encode(message: StringPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringPropertyMetadata;
    fromJSON(object: any): StringPropertyMetadata;
    toJSON(message: StringPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<StringPropertyMetadata>): StringPropertyMetadata;
};
interface LinkPropertyAssignment {
    priority?: number | undefined;
    value?: LinkPropertyValue;
    assignmentId: string;
}
declare const LinkPropertyAssignment: {
    encode(message: LinkPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkPropertyAssignment;
    fromJSON(object: any): LinkPropertyAssignment;
    toJSON(message: LinkPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<LinkPropertyAssignment>): LinkPropertyAssignment;
};
interface LinkPropertyValue {
    constant?: PropertyIdentifier | undefined;
    ref?: PropertyIdentifier | undefined;
    expr?: string | undefined;
    useDefault?: boolean | undefined;
    custom?: CustomGeneratorValue | undefined;
}
declare const LinkPropertyValue: {
    encode(message: LinkPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkPropertyValue;
    fromJSON(object: any): LinkPropertyValue;
    toJSON(message: LinkPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<LinkPropertyValue>): LinkPropertyValue;
};
interface LinkPropertyDeclaration {
    default: string;
    meta?: LinkPropertyMetadata;
}
declare const LinkPropertyDeclaration: {
    encode(message: LinkPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkPropertyDeclaration;
    fromJSON(object: any): LinkPropertyDeclaration;
    toJSON(message: LinkPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<LinkPropertyDeclaration>): LinkPropertyDeclaration;
};
interface LinkPropertyMetadata {
    base?: PropertyMetadata;
    edit?: LinkEditingMetadata | undefined;
}
declare const LinkPropertyMetadata: {
    encode(message: LinkPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkPropertyMetadata;
    fromJSON(object: any): LinkPropertyMetadata;
    toJSON(message: LinkPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<LinkPropertyMetadata>): LinkPropertyMetadata;
};
interface LinkGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: LinkEditingMetadata | undefined;
}
declare const LinkGeneratorMetadata: {
    encode(message: LinkGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkGeneratorMetadata;
    fromJSON(object: any): LinkGeneratorMetadata;
    toJSON(message: LinkGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<LinkGeneratorMetadata>): LinkGeneratorMetadata;
};
interface LinkEditingMetadata {
    contentType?: LinkContentTypeSpecifier | undefined;
    directToLibrary?: boolean | undefined;
}
declare const LinkEditingMetadata: {
    encode(message: LinkEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkEditingMetadata;
    fromJSON(object: any): LinkEditingMetadata;
    toJSON(message: LinkEditingMetadata): unknown;
    fromPartial(object: DeepPartial$c<LinkEditingMetadata>): LinkEditingMetadata;
};
interface LinkContentTypeSpecifier {
    Texture?: LinkContentTypeSpecifier_TextureType | undefined;
    Material?: LinkContentTypeSpecifier_MaterialType | undefined;
}
declare const LinkContentTypeSpecifier: {
    encode(message: LinkContentTypeSpecifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkContentTypeSpecifier;
    fromJSON(object: any): LinkContentTypeSpecifier;
    toJSON(message: LinkContentTypeSpecifier): unknown;
    fromPartial(object: DeepPartial$c<LinkContentTypeSpecifier>): LinkContentTypeSpecifier;
};
interface VectorPropertyAssignment {
    method?: VectorPropertyAssignment_VectorPropertyMethod | undefined;
    priority?: number | undefined;
    assignmentId: string;
    value?: VectorPropertyValue;
}
declare const VectorPropertyAssignment: {
    encode(message: VectorPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyAssignment;
    fromJSON(object: any): VectorPropertyAssignment;
    toJSON(message: VectorPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyAssignment>): VectorPropertyAssignment;
};
interface VectorPropertyValue {
    constant?: Float4 | undefined;
    ref?: PropertyIdentifier | undefined;
    expr?: string | undefined;
    byChannel?: VectorPerChannel | undefined;
    keyframes?: VectorPropertyKeyframed | undefined;
    useDefault?: boolean | undefined;
    interp?: VectorPropertyInterpolator | undefined;
    custom?: CustomGeneratorValue | undefined;
    quadratic?: VectorPropertyQuadratic | undefined;
    uniform?: ScalarPropertyValue | undefined;
}
declare const VectorPropertyValue: {
    encode(message: VectorPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyValue;
    fromJSON(object: any): VectorPropertyValue;
    toJSON(message: VectorPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyValue>): VectorPropertyValue;
};
interface VectorPropertyInterpolator {
    t?: ScalarPropertyValue;
    from?: VectorPropertyValue;
    to?: VectorPropertyValue;
    by?: Interpolation;
}
declare const VectorPropertyInterpolator: {
    encode(message: VectorPropertyInterpolator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyInterpolator;
    fromJSON(object: any): VectorPropertyInterpolator;
    toJSON(message: VectorPropertyInterpolator): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyInterpolator>): VectorPropertyInterpolator;
};
interface VectorPerChannel {
    x?: ScalarPropertyValue;
    y?: ScalarPropertyValue;
    z?: ScalarPropertyValue;
    w?: ScalarPropertyValue | undefined;
}
declare const VectorPerChannel: {
    encode(message: VectorPerChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPerChannel;
    fromJSON(object: any): VectorPerChannel;
    toJSON(message: VectorPerChannel): unknown;
    fromPartial(object: DeepPartial$c<VectorPerChannel>): VectorPerChannel;
};
interface VectorPropertyQuadratic {
    p?: VectorPropertyValue;
    v?: VectorPropertyValue;
    a?: VectorPropertyValue | undefined;
    t?: ScalarPropertyValue | undefined;
}
declare const VectorPropertyQuadratic: {
    encode(message: VectorPropertyQuadratic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyQuadratic;
    fromJSON(object: any): VectorPropertyQuadratic;
    toJSON(message: VectorPropertyQuadratic): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyQuadratic>): VectorPropertyQuadratic;
};
interface VectorPropertyKeyframed {
    tSrc?: ScalarPropertyValue | undefined;
    keys?: VectorPropertyKeyframed_VectorKeyframe[];
    looping: KeyframeLoopingEnum;
    tangentGen: TangentsAutocomputeMethodEnum;
    interpolationMethod: VectorPropertyKeyframed_VectorInterpolationMethod;
}
declare const VectorPropertyKeyframed: {
    encode(message: VectorPropertyKeyframed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyKeyframed;
    fromJSON(object: any): VectorPropertyKeyframed;
    toJSON(message: VectorPropertyKeyframed): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyKeyframed>): VectorPropertyKeyframed;
};
interface VectorPropertyKeyframed_VectorKeyframe {
    t: number;
    val?: VectorPropertyValue;
    tangentIn?: Float4 | undefined;
    tangentOut?: Float4 | undefined;
}
declare const VectorPropertyKeyframed_VectorKeyframe: {
    encode(message: VectorPropertyKeyframed_VectorKeyframe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyKeyframed_VectorKeyframe;
    fromJSON(object: any): VectorPropertyKeyframed_VectorKeyframe;
    toJSON(message: VectorPropertyKeyframed_VectorKeyframe): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyKeyframed_VectorKeyframe>): VectorPropertyKeyframed_VectorKeyframe;
};
interface VectorPropertyDeclaration {
    default?: Float4;
    meta?: VectorPropertyMetadata;
}
declare const VectorPropertyDeclaration: {
    encode(message: VectorPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyDeclaration;
    fromJSON(object: any): VectorPropertyDeclaration;
    toJSON(message: VectorPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyDeclaration>): VectorPropertyDeclaration;
};
interface VectorEditingMetadata {
    usage: VectorEditingMetadata_VectorInterpretationEnum;
}
declare const VectorEditingMetadata: {
    encode(message: VectorEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorEditingMetadata;
    fromJSON(object: any): VectorEditingMetadata;
    toJSON(message: VectorEditingMetadata): unknown;
    fromPartial(object: DeepPartial$c<VectorEditingMetadata>): VectorEditingMetadata;
};
interface VectorGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: VectorEditingMetadata | undefined;
}
declare const VectorGeneratorMetadata: {
    encode(message: VectorGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorGeneratorMetadata;
    fromJSON(object: any): VectorGeneratorMetadata;
    toJSON(message: VectorGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<VectorGeneratorMetadata>): VectorGeneratorMetadata;
};
interface VectorPropertyMetadata {
    base?: PropertyMetadata;
    edit?: VectorEditingMetadata | undefined;
}
declare const VectorPropertyMetadata: {
    encode(message: VectorPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VectorPropertyMetadata;
    fromJSON(object: any): VectorPropertyMetadata;
    toJSON(message: VectorPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<VectorPropertyMetadata>): VectorPropertyMetadata;
};
interface ColorPropertyAssignment {
    method?: ColorPropertyAssignment_ColorPropertyMethod | undefined;
    priority?: number | undefined;
    assignmentId: string;
    value?: ColorPropertyValue;
}
declare const ColorPropertyAssignment: {
    encode(message: ColorPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyAssignment;
    fromJSON(object: any): ColorPropertyAssignment;
    toJSON(message: ColorPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyAssignment>): ColorPropertyAssignment;
};
interface ColorPropertyValue {
    constant?: Color4 | undefined;
    ref?: PropertyIdentifier | undefined;
    byChannel?: ColorPerChannel | undefined;
    keyframes?: ColorPropertyKeyframed | undefined;
    expr?: string | undefined;
    useDefault?: boolean | undefined;
    interp?: ColorPropertyInterpolator | undefined;
    custom?: CustomGeneratorValue | undefined;
}
declare const ColorPropertyValue: {
    encode(message: ColorPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyValue;
    fromJSON(object: any): ColorPropertyValue;
    toJSON(message: ColorPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyValue>): ColorPropertyValue;
};
interface ColorPropertyInterpolator {
    t?: ScalarPropertyValue;
    from?: ColorPropertyValue;
    to?: ColorPropertyValue;
    by?: Interpolation;
}
declare const ColorPropertyInterpolator: {
    encode(message: ColorPropertyInterpolator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyInterpolator;
    fromJSON(object: any): ColorPropertyInterpolator;
    toJSON(message: ColorPropertyInterpolator): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyInterpolator>): ColorPropertyInterpolator;
};
interface ColorPerChannel {
    r?: ScalarPropertyValue;
    g?: ScalarPropertyValue;
    b?: ScalarPropertyValue;
    a?: ScalarPropertyValue;
}
declare const ColorPerChannel: {
    encode(message: ColorPerChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPerChannel;
    fromJSON(object: any): ColorPerChannel;
    toJSON(message: ColorPerChannel): unknown;
    fromPartial(object: DeepPartial$c<ColorPerChannel>): ColorPerChannel;
};
interface ColorPropertyKeyframed {
    tSrc?: ScalarPropertyValue | undefined;
    keys?: ColorPropertyKeyframed_ColorKeyframe[];
    looping: KeyframeLoopingEnum;
    tangentGen: TangentsAutocomputeMethodEnum;
}
declare const ColorPropertyKeyframed: {
    encode(message: ColorPropertyKeyframed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyKeyframed;
    fromJSON(object: any): ColorPropertyKeyframed;
    toJSON(message: ColorPropertyKeyframed): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyKeyframed>): ColorPropertyKeyframed;
};
interface ColorPropertyKeyframed_ColorKeyframe {
    t: number;
    val?: ColorPropertyValue;
    tangentIn?: Color4 | undefined;
    tangentOut?: Color4 | undefined;
}
declare const ColorPropertyKeyframed_ColorKeyframe: {
    encode(message: ColorPropertyKeyframed_ColorKeyframe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyKeyframed_ColorKeyframe;
    fromJSON(object: any): ColorPropertyKeyframed_ColorKeyframe;
    toJSON(message: ColorPropertyKeyframed_ColorKeyframe): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyKeyframed_ColorKeyframe>): ColorPropertyKeyframed_ColorKeyframe;
};
interface ColorPropertyDeclaration {
    default?: Color4;
    meta?: ColorPropertyMetadata;
}
declare const ColorPropertyDeclaration: {
    encode(message: ColorPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyDeclaration;
    fromJSON(object: any): ColorPropertyDeclaration;
    toJSON(message: ColorPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyDeclaration>): ColorPropertyDeclaration;
};
interface ColorEditingMetadata {
    allowHdr?: boolean | undefined;
    usesAlpha?: boolean | undefined;
}
declare const ColorEditingMetadata: {
    encode(message: ColorEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorEditingMetadata;
    fromJSON(object: any): ColorEditingMetadata;
    toJSON(message: ColorEditingMetadata): unknown;
    fromPartial(object: DeepPartial$c<ColorEditingMetadata>): ColorEditingMetadata;
};
interface ColorGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: ColorEditingMetadata | undefined;
}
declare const ColorGeneratorMetadata: {
    encode(message: ColorGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorGeneratorMetadata;
    fromJSON(object: any): ColorGeneratorMetadata;
    toJSON(message: ColorGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<ColorGeneratorMetadata>): ColorGeneratorMetadata;
};
interface ColorPropertyMetadata {
    base?: PropertyMetadata;
    edit?: ColorEditingMetadata | undefined;
}
declare const ColorPropertyMetadata: {
    encode(message: ColorPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColorPropertyMetadata;
    fromJSON(object: any): ColorPropertyMetadata;
    toJSON(message: ColorPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<ColorPropertyMetadata>): ColorPropertyMetadata;
};
interface BooleanPropertyAssignment {
    assignmentId: string;
    value?: BooleanPropertyValue;
    priority: number;
}
declare const BooleanPropertyAssignment: {
    encode(message: BooleanPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyAssignment;
    fromJSON(object: any): BooleanPropertyAssignment;
    toJSON(message: BooleanPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyAssignment>): BooleanPropertyAssignment;
};
interface BooleanPropertyValue {
    constant?: boolean | undefined;
    ref?: PropertyIdentifier | undefined;
    keyframes?: BooleanPropertyKeyframed | undefined;
    expr?: string | undefined;
    scalarCmp?: BooleanPropertyScalarComparison | undefined;
    useDefault?: boolean | undefined;
    custom?: CustomGeneratorValue | undefined;
}
declare const BooleanPropertyValue: {
    encode(message: BooleanPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyValue;
    fromJSON(object: any): BooleanPropertyValue;
    toJSON(message: BooleanPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyValue>): BooleanPropertyValue;
};
interface BooleanPropertyKeyframed {
    tSrc?: ScalarPropertyValue | undefined;
    keys?: BooleanPropertyKeyframed_BooleanKeyframe[];
    looping: KeyframeLoopingEnum;
}
declare const BooleanPropertyKeyframed: {
    encode(message: BooleanPropertyKeyframed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyKeyframed;
    fromJSON(object: any): BooleanPropertyKeyframed;
    toJSON(message: BooleanPropertyKeyframed): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyKeyframed>): BooleanPropertyKeyframed;
};
interface BooleanPropertyKeyframed_BooleanKeyframe {
    t: number;
    val?: BooleanPropertyValue;
}
declare const BooleanPropertyKeyframed_BooleanKeyframe: {
    encode(message: BooleanPropertyKeyframed_BooleanKeyframe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyKeyframed_BooleanKeyframe;
    fromJSON(object: any): BooleanPropertyKeyframed_BooleanKeyframe;
    toJSON(message: BooleanPropertyKeyframed_BooleanKeyframe): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyKeyframed_BooleanKeyframe>): BooleanPropertyKeyframed_BooleanKeyframe;
};
interface BooleanPropertyScalarComparison {
    cmp: ComparisonMethod;
    a?: ScalarPropertyValue;
    b?: ScalarPropertyValue;
}
declare const BooleanPropertyScalarComparison: {
    encode(message: BooleanPropertyScalarComparison, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyScalarComparison;
    fromJSON(object: any): BooleanPropertyScalarComparison;
    toJSON(message: BooleanPropertyScalarComparison): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyScalarComparison>): BooleanPropertyScalarComparison;
};
interface BooleanPropertyDeclaration {
    default: boolean;
    meta?: BooleanPropertyMetadata;
}
declare const BooleanPropertyDeclaration: {
    encode(message: BooleanPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyDeclaration;
    fromJSON(object: any): BooleanPropertyDeclaration;
    toJSON(message: BooleanPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyDeclaration>): BooleanPropertyDeclaration;
};
interface BooleanEditingMetadata {
}
declare const BooleanEditingMetadata: {
    encode(_: BooleanEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanEditingMetadata;
    fromJSON(_: any): BooleanEditingMetadata;
    toJSON(_: BooleanEditingMetadata): unknown;
    fromPartial(_: DeepPartial$c<BooleanEditingMetadata>): BooleanEditingMetadata;
};
interface BooleanGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: BooleanEditingMetadata | undefined;
}
declare const BooleanGeneratorMetadata: {
    encode(message: BooleanGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanGeneratorMetadata;
    fromJSON(object: any): BooleanGeneratorMetadata;
    toJSON(message: BooleanGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<BooleanGeneratorMetadata>): BooleanGeneratorMetadata;
};
interface BooleanPropertyMetadata {
    base?: PropertyMetadata;
    edit?: BooleanEditingMetadata | undefined;
}
declare const BooleanPropertyMetadata: {
    encode(message: BooleanPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BooleanPropertyMetadata;
    fromJSON(object: any): BooleanPropertyMetadata;
    toJSON(message: BooleanPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<BooleanPropertyMetadata>): BooleanPropertyMetadata;
};
interface JsonPropertyAssignment {
    assignmentId: string;
    value?: JsonPropertyValue;
    priority: number;
}
declare const JsonPropertyAssignment: {
    encode(message: JsonPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JsonPropertyAssignment;
    fromJSON(object: any): JsonPropertyAssignment;
    toJSON(message: JsonPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<JsonPropertyAssignment>): JsonPropertyAssignment;
};
interface JsonPropertyValue {
    constantJson?: string | undefined;
    ref?: PropertyIdentifier | undefined;
    expr?: string | undefined;
    useDefault?: boolean | undefined;
    custom?: CustomGeneratorValue | undefined;
}
declare const JsonPropertyValue: {
    encode(message: JsonPropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JsonPropertyValue;
    fromJSON(object: any): JsonPropertyValue;
    toJSON(message: JsonPropertyValue): unknown;
    fromPartial(object: DeepPartial$c<JsonPropertyValue>): JsonPropertyValue;
};
interface JsonPropertyDeclaration {
    defaultJson: string;
    meta?: JsonPropertyMetadata;
}
declare const JsonPropertyDeclaration: {
    encode(message: JsonPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JsonPropertyDeclaration;
    fromJSON(object: any): JsonPropertyDeclaration;
    toJSON(message: JsonPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<JsonPropertyDeclaration>): JsonPropertyDeclaration;
};
interface JsonEditingMetadata {
}
declare const JsonEditingMetadata: {
    encode(_: JsonEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JsonEditingMetadata;
    fromJSON(_: any): JsonEditingMetadata;
    toJSON(_: JsonEditingMetadata): unknown;
    fromPartial(_: DeepPartial$c<JsonEditingMetadata>): JsonEditingMetadata;
};
interface JsonGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: JsonEditingMetadata | undefined;
}
declare const JsonGeneratorMetadata: {
    encode(message: JsonGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JsonGeneratorMetadata;
    fromJSON(object: any): JsonGeneratorMetadata;
    toJSON(message: JsonGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<JsonGeneratorMetadata>): JsonGeneratorMetadata;
};
interface JsonPropertyMetadata {
    base?: PropertyMetadata;
    edit?: JsonEditingMetadata | undefined;
}
declare const JsonPropertyMetadata: {
    encode(message: JsonPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JsonPropertyMetadata;
    fromJSON(object: any): JsonPropertyMetadata;
    toJSON(message: JsonPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<JsonPropertyMetadata>): JsonPropertyMetadata;
};
interface TransformSet {
    srt?: TransformSetSRT | undefined;
    sqt?: TransformSetSQT | undefined;
    look?: TransformSetLookAt | undefined;
    ref?: PropertyIdentifier | undefined;
    expr?: string | undefined;
    useDefault?: boolean | undefined;
    useSource?: boolean | undefined;
    interpSrt?: TransformSetInterpolatorSRT | undefined;
    interpSqt?: TransformSetInterpolatorSQT | undefined;
    interpLook?: TransformSetInterpolatorLookAt | undefined;
    custom?: CustomGeneratorValue | undefined;
    conditional?: TransformSetConditional | undefined;
}
declare const TransformSet: {
    encode(message: TransformSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSet;
    fromJSON(object: any): TransformSet;
    toJSON(message: TransformSet): unknown;
    fromPartial(object: DeepPartial$c<TransformSet>): TransformSet;
};
interface TransformSetSRT {
    scale?: VectorPropertyValue;
    rotationEuler?: VectorPropertyValue;
    transformPos?: VectorPropertyValue;
}
declare const TransformSetSRT: {
    encode(message: TransformSetSRT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetSRT;
    fromJSON(object: any): TransformSetSRT;
    toJSON(message: TransformSetSRT): unknown;
    fromPartial(object: DeepPartial$c<TransformSetSRT>): TransformSetSRT;
};
interface TransformSetSQT {
    scale?: VectorPropertyValue;
    rotationQuat?: VectorPropertyValue;
    transformPos?: VectorPropertyValue;
}
declare const TransformSetSQT: {
    encode(message: TransformSetSQT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetSQT;
    fromJSON(object: any): TransformSetSQT;
    toJSON(message: TransformSetSQT): unknown;
    fromPartial(object: DeepPartial$c<TransformSetSQT>): TransformSetSQT;
};
interface TransformSetLookAt {
    eye?: VectorPropertyValue;
    lookAt?: VectorPropertyValue;
    up?: VectorPropertyValue | undefined;
}
declare const TransformSetLookAt: {
    encode(message: TransformSetLookAt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetLookAt;
    fromJSON(object: any): TransformSetLookAt;
    toJSON(message: TransformSetLookAt): unknown;
    fromPartial(object: DeepPartial$c<TransformSetLookAt>): TransformSetLookAt;
};
interface TransformSetInterpolatorSRT {
    t?: ScalarPropertyValue;
    from?: TransformSetSRT;
    to?: TransformSetSRT;
    by?: Interpolation;
}
declare const TransformSetInterpolatorSRT: {
    encode(message: TransformSetInterpolatorSRT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetInterpolatorSRT;
    fromJSON(object: any): TransformSetInterpolatorSRT;
    toJSON(message: TransformSetInterpolatorSRT): unknown;
    fromPartial(object: DeepPartial$c<TransformSetInterpolatorSRT>): TransformSetInterpolatorSRT;
};
interface TransformSetInterpolatorSQT {
    t?: ScalarPropertyValue;
    from?: TransformSetSQT;
    to?: TransformSetSQT;
    by?: Interpolation;
}
declare const TransformSetInterpolatorSQT: {
    encode(message: TransformSetInterpolatorSQT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetInterpolatorSQT;
    fromJSON(object: any): TransformSetInterpolatorSQT;
    toJSON(message: TransformSetInterpolatorSQT): unknown;
    fromPartial(object: DeepPartial$c<TransformSetInterpolatorSQT>): TransformSetInterpolatorSQT;
};
interface TransformSetInterpolatorLookAt {
    t?: ScalarPropertyValue;
    from?: TransformSetLookAt;
    to?: TransformSetLookAt;
    by?: Interpolation;
}
declare const TransformSetInterpolatorLookAt: {
    encode(message: TransformSetInterpolatorLookAt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetInterpolatorLookAt;
    fromJSON(object: any): TransformSetInterpolatorLookAt;
    toJSON(message: TransformSetInterpolatorLookAt): unknown;
    fromPartial(object: DeepPartial$c<TransformSetInterpolatorLookAt>): TransformSetInterpolatorLookAt;
};
interface TransformSetConditional {
    condition?: BooleanPropertyValue;
    trueValue?: TransformSet | undefined;
    falseValue?: TransformSet | undefined;
}
declare const TransformSetConditional: {
    encode(message: TransformSetConditional, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformSetConditional;
    fromJSON(object: any): TransformSetConditional;
    toJSON(message: TransformSetConditional): unknown;
    fromPartial(object: DeepPartial$c<TransformSetConditional>): TransformSetConditional;
};
interface TransformUpdate {
    addTranslation?: TransformUpdateAddT | undefined;
    addEulerRotation?: TransformUpdateAddR | undefined;
    addQuatRotation?: TransformUpdateAddQ | undefined;
    uniformScale?: TransformUpdateScaleUniform | undefined;
    nonuniformScale?: TransformUpdateScaleNonuniform | undefined;
    facePos?: TransformUpdateLookAt | undefined;
    toEuler?: TransformUpdateRotateToEuler | undefined;
    toQuat?: TransformUpdateRotateToQuat | undefined;
    expr?: string | undefined;
}
declare const TransformUpdate: {
    encode(message: TransformUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdate;
    fromJSON(object: any): TransformUpdate;
    toJSON(message: TransformUpdate): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdate>): TransformUpdate;
};
interface TransformUpdateAddT {
    offsetPosition?: VectorPropertyValue;
}
declare const TransformUpdateAddT: {
    encode(message: TransformUpdateAddT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateAddT;
    fromJSON(object: any): TransformUpdateAddT;
    toJSON(message: TransformUpdateAddT): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateAddT>): TransformUpdateAddT;
};
interface TransformUpdateAddR {
    offsetRotationEuler?: VectorPropertyValue;
}
declare const TransformUpdateAddR: {
    encode(message: TransformUpdateAddR, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateAddR;
    fromJSON(object: any): TransformUpdateAddR;
    toJSON(message: TransformUpdateAddR): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateAddR>): TransformUpdateAddR;
};
interface TransformUpdateAddQ {
    offsetRotationQuat?: VectorPropertyValue;
}
declare const TransformUpdateAddQ: {
    encode(message: TransformUpdateAddQ, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateAddQ;
    fromJSON(object: any): TransformUpdateAddQ;
    toJSON(message: TransformUpdateAddQ): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateAddQ>): TransformUpdateAddQ;
};
interface TransformUpdateScaleUniform {
    uniformScaleMultiplier?: ScalarPropertyValue;
}
declare const TransformUpdateScaleUniform: {
    encode(message: TransformUpdateScaleUniform, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateScaleUniform;
    fromJSON(object: any): TransformUpdateScaleUniform;
    toJSON(message: TransformUpdateScaleUniform): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateScaleUniform>): TransformUpdateScaleUniform;
};
interface TransformUpdateScaleNonuniform {
    nonuniformScaleMultiplier?: VectorPropertyValue;
}
declare const TransformUpdateScaleNonuniform: {
    encode(message: TransformUpdateScaleNonuniform, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateScaleNonuniform;
    fromJSON(object: any): TransformUpdateScaleNonuniform;
    toJSON(message: TransformUpdateScaleNonuniform): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateScaleNonuniform>): TransformUpdateScaleNonuniform;
};
interface TransformUpdateLookAt {
    percentToMove?: ScalarPropertyValue;
    lookAt?: VectorPropertyValue;
}
declare const TransformUpdateLookAt: {
    encode(message: TransformUpdateLookAt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateLookAt;
    fromJSON(object: any): TransformUpdateLookAt;
    toJSON(message: TransformUpdateLookAt): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateLookAt>): TransformUpdateLookAt;
};
interface TransformUpdateRotateToEuler {
    percentToMove?: ScalarPropertyValue;
    toEuler?: VectorPropertyValue;
}
declare const TransformUpdateRotateToEuler: {
    encode(message: TransformUpdateRotateToEuler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateRotateToEuler;
    fromJSON(object: any): TransformUpdateRotateToEuler;
    toJSON(message: TransformUpdateRotateToEuler): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateRotateToEuler>): TransformUpdateRotateToEuler;
};
interface TransformUpdateRotateToQuat {
    percentToMove?: ScalarPropertyValue;
    toQuat?: VectorPropertyValue;
}
declare const TransformUpdateRotateToQuat: {
    encode(message: TransformUpdateRotateToQuat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformUpdateRotateToQuat;
    fromJSON(object: any): TransformUpdateRotateToQuat;
    toJSON(message: TransformUpdateRotateToQuat): unknown;
    fromPartial(object: DeepPartial$c<TransformUpdateRotateToQuat>): TransformUpdateRotateToQuat;
};
interface TransformPropertyAssignment {
    assignmentId: string;
    setPriority?: number | undefined;
    modifyOrder?: number | undefined;
    setValue?: TransformSet | undefined;
    modifyValue?: TransformUpdate | undefined;
}
declare const TransformPropertyAssignment: {
    encode(message: TransformPropertyAssignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformPropertyAssignment;
    fromJSON(object: any): TransformPropertyAssignment;
    toJSON(message: TransformPropertyAssignment): unknown;
    fromPartial(object: DeepPartial$c<TransformPropertyAssignment>): TransformPropertyAssignment;
};
interface TransformPropertyDeclaration {
    default?: TransformSet;
    meta?: TransformPropertyMetadata;
}
declare const TransformPropertyDeclaration: {
    encode(message: TransformPropertyDeclaration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformPropertyDeclaration;
    fromJSON(object: any): TransformPropertyDeclaration;
    toJSON(message: TransformPropertyDeclaration): unknown;
    fromPartial(object: DeepPartial$c<TransformPropertyDeclaration>): TransformPropertyDeclaration;
};
interface TransformEditingMetadata {
    allowSetFromUserTransform?: boolean | undefined;
    allowUnset?: boolean | undefined;
}
declare const TransformEditingMetadata: {
    encode(message: TransformEditingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformEditingMetadata;
    fromJSON(object: any): TransformEditingMetadata;
    toJSON(message: TransformEditingMetadata): unknown;
    fromPartial(object: DeepPartial$c<TransformEditingMetadata>): TransformEditingMetadata;
};
interface TransformGeneratorMetadata {
    base?: GeneratorMetadata;
    edit?: TransformEditingMetadata | undefined;
}
declare const TransformGeneratorMetadata: {
    encode(message: TransformGeneratorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformGeneratorMetadata;
    fromJSON(object: any): TransformGeneratorMetadata;
    toJSON(message: TransformGeneratorMetadata): unknown;
    fromPartial(object: DeepPartial$c<TransformGeneratorMetadata>): TransformGeneratorMetadata;
};
interface TransformPropertyMetadata {
    base?: PropertyMetadata;
    edit?: TransformEditingMetadata | undefined;
}
declare const TransformPropertyMetadata: {
    encode(message: TransformPropertyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransformPropertyMetadata;
    fromJSON(object: any): TransformPropertyMetadata;
    toJSON(message: TransformPropertyMetadata): unknown;
    fromPartial(object: DeepPartial$c<TransformPropertyMetadata>): TransformPropertyMetadata;
};
interface CustomGeneratorSubGenScalar {
    generator?: ScalarPropertyValue | undefined;
    meta?: ScalarGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenScalar: {
    encode(message: CustomGeneratorSubGenScalar, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenScalar;
    fromJSON(object: any): CustomGeneratorSubGenScalar;
    toJSON(message: CustomGeneratorSubGenScalar): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenScalar>): CustomGeneratorSubGenScalar;
};
interface CustomGeneratorSubGenString {
    generator?: StringPropertyValue | undefined;
    meta?: StringGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenString: {
    encode(message: CustomGeneratorSubGenString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenString;
    fromJSON(object: any): CustomGeneratorSubGenString;
    toJSON(message: CustomGeneratorSubGenString): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenString>): CustomGeneratorSubGenString;
};
interface CustomGeneratorSubGenLink {
    generator?: LinkPropertyValue | undefined;
    meta?: LinkGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenLink: {
    encode(message: CustomGeneratorSubGenLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenLink;
    fromJSON(object: any): CustomGeneratorSubGenLink;
    toJSON(message: CustomGeneratorSubGenLink): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenLink>): CustomGeneratorSubGenLink;
};
interface CustomGeneratorSubGenVector {
    generator?: VectorPropertyValue | undefined;
    meta?: VectorGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenVector: {
    encode(message: CustomGeneratorSubGenVector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenVector;
    fromJSON(object: any): CustomGeneratorSubGenVector;
    toJSON(message: CustomGeneratorSubGenVector): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenVector>): CustomGeneratorSubGenVector;
};
interface CustomGeneratorSubGenColor {
    generator?: ColorPropertyValue | undefined;
    meta?: ColorGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenColor: {
    encode(message: CustomGeneratorSubGenColor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenColor;
    fromJSON(object: any): CustomGeneratorSubGenColor;
    toJSON(message: CustomGeneratorSubGenColor): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenColor>): CustomGeneratorSubGenColor;
};
interface CustomGeneratorSubGenBoolean {
    generator?: BooleanPropertyValue | undefined;
    meta?: BooleanGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenBoolean: {
    encode(message: CustomGeneratorSubGenBoolean, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenBoolean;
    fromJSON(object: any): CustomGeneratorSubGenBoolean;
    toJSON(message: CustomGeneratorSubGenBoolean): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenBoolean>): CustomGeneratorSubGenBoolean;
};
interface CustomGeneratorSubGenJson {
    generator?: JsonPropertyValue | undefined;
    meta?: JsonGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenJson: {
    encode(message: CustomGeneratorSubGenJson, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenJson;
    fromJSON(object: any): CustomGeneratorSubGenJson;
    toJSON(message: CustomGeneratorSubGenJson): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenJson>): CustomGeneratorSubGenJson;
};
interface CustomGeneratorSubGenTransform {
    generator?: TransformSet | undefined;
    meta?: TransformGeneratorMetadata | undefined;
}
declare const CustomGeneratorSubGenTransform: {
    encode(message: CustomGeneratorSubGenTransform, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGenTransform;
    fromJSON(object: any): CustomGeneratorSubGenTransform;
    toJSON(message: CustomGeneratorSubGenTransform): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGenTransform>): CustomGeneratorSubGenTransform;
};
interface CustomGeneratorSubGen {
    scalar?: CustomGeneratorSubGenScalar | undefined;
    string?: CustomGeneratorSubGenString | undefined;
    link?: CustomGeneratorSubGenLink | undefined;
    vector?: CustomGeneratorSubGenVector | undefined;
    color?: CustomGeneratorSubGenColor | undefined;
    boolean?: CustomGeneratorSubGenBoolean | undefined;
    json?: CustomGeneratorSubGenJson | undefined;
    transform?: CustomGeneratorSubGenTransform | undefined;
}
declare const CustomGeneratorSubGen: {
    encode(message: CustomGeneratorSubGen, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorSubGen;
    fromJSON(object: any): CustomGeneratorSubGen;
    toJSON(message: CustomGeneratorSubGen): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorSubGen>): CustomGeneratorSubGen;
};
interface CustomGeneratorValue {
    customId: string;
    subGens?: CustomGeneratorSubGen[];
}
declare const CustomGeneratorValue: {
    encode(message: CustomGeneratorValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomGeneratorValue;
    fromJSON(object: any): CustomGeneratorValue;
    toJSON(message: CustomGeneratorValue): unknown;
    fromPartial(object: DeepPartial$c<CustomGeneratorValue>): CustomGeneratorValue;
};
declare type Builtin$c = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$c<T> = T extends Builtin$c ? T : T extends Array<infer U> ? Array<DeepPartial$c<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$c<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$c<T[K]>;
} : Partial<T>;

declare const protobufPackage$6 = "Journal";
declare enum OpRemoveOps_V1_UndoRedoType {
    None = 0,
    Undo = 1,
    Redo = 2,
    UNRECOGNIZED = -1
}
declare function opRemoveOps_V1_UndoRedoTypeFromJSON(object: any): OpRemoveOps_V1_UndoRedoType;
declare function opRemoveOps_V1_UndoRedoTypeToJSON(object: OpRemoveOps_V1_UndoRedoType): string;
declare enum OpRemoveOps_V2_UndoRedoType {
    None = 0,
    Undo = 1,
    Redo = 2,
    UNRECOGNIZED = -1
}
declare function opRemoveOps_V2_UndoRedoTypeFromJSON(object: any): OpRemoveOps_V2_UndoRedoType;
declare function opRemoveOps_V2_UndoRedoTypeToJSON(object: OpRemoveOps_V2_UndoRedoType): string;
declare enum OpUserAuthorityData_V1_AuthorityCoordinationEventEnum {
    Finalizing = 0,
    Coordinating = 1,
    UNRECOGNIZED = -1
}
declare function opUserAuthorityData_V1_AuthorityCoordinationEventEnumFromJSON(object: any): OpUserAuthorityData_V1_AuthorityCoordinationEventEnum;
declare function opUserAuthorityData_V1_AuthorityCoordinationEventEnumToJSON(object: OpUserAuthorityData_V1_AuthorityCoordinationEventEnum): string;
/**
 * Ops are uniquely identified by their timestamp and the connection id of the user who created them'
 * DEPRECATED (v2 is now id based)
 */
interface OperationId$1 {
    time?: Date;
    connectionId: string;
}
declare const OperationId$1: {
    encode(message: OperationId$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationId$1;
    fromJSON(object: any): OperationId$1;
    toJSON(message: OperationId$1): unknown;
    fromPartial(object: DeepPartial$b<OperationId$1>): OperationId$1;
};
/** DEPRECRATED (v2 is now id based) */
interface OperationReferenceCollection {
    spans?: OperationReferenceCollection_ReferenceTimeSpan[];
    singles?: OperationReferenceCollection_ReferenceSinglesByConnection[];
}
declare const OperationReferenceCollection: {
    encode(message: OperationReferenceCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationReferenceCollection;
    fromJSON(object: any): OperationReferenceCollection;
    toJSON(message: OperationReferenceCollection): unknown;
    fromPartial(object: DeepPartial$b<OperationReferenceCollection>): OperationReferenceCollection;
};
/** Identifies all ops that take place within a span of time */
interface OperationReferenceCollection_ReferenceTimeSpan {
    begin?: Date;
    endInclusive?: Date;
}
declare const OperationReferenceCollection_ReferenceTimeSpan: {
    encode(message: OperationReferenceCollection_ReferenceTimeSpan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationReferenceCollection_ReferenceTimeSpan;
    fromJSON(object: any): OperationReferenceCollection_ReferenceTimeSpan;
    toJSON(message: OperationReferenceCollection_ReferenceTimeSpan): unknown;
    fromPartial(object: DeepPartial$b<OperationReferenceCollection_ReferenceTimeSpan>): OperationReferenceCollection_ReferenceTimeSpan;
};
/** Identifies all operations done by a specific user's connection id at a certain time */
interface OperationReferenceCollection_ReferenceSinglesByConnection {
    fromConnectionId: string;
    atTimeSet?: Date[];
}
declare const OperationReferenceCollection_ReferenceSinglesByConnection: {
    encode(message: OperationReferenceCollection_ReferenceSinglesByConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationReferenceCollection_ReferenceSinglesByConnection;
    fromJSON(object: any): OperationReferenceCollection_ReferenceSinglesByConnection;
    toJSON(message: OperationReferenceCollection_ReferenceSinglesByConnection): unknown;
    fromPartial(object: DeepPartial$b<OperationReferenceCollection_ReferenceSinglesByConnection>): OperationReferenceCollection_ReferenceSinglesByConnection;
};
/** Removes any number of operations.  The removal type is used to facilitate our undo/redo logic.  "Redos" are just Removals of Undos.  "None" is for removals done by the system or user that are not part of the undo/redo stack. */
interface OpRemoveOps {
    v1?: OpRemoveOps_V1 | undefined;
    v2?: OpRemoveOps_V2 | undefined;
}
declare const OpRemoveOps: {
    encode(message: OpRemoveOps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpRemoveOps;
    fromJSON(object: any): OpRemoveOps;
    toJSON(message: OpRemoveOps): unknown;
    fromPartial(object: DeepPartial$b<OpRemoveOps>): OpRemoveOps;
};
interface OpRemoveOps_V1 {
    ids?: OperationReferenceCollection;
    removalType: OpRemoveOps_V1_UndoRedoType;
}
declare const OpRemoveOps_V1: {
    encode(message: OpRemoveOps_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpRemoveOps_V1;
    fromJSON(object: any): OpRemoveOps_V1;
    toJSON(message: OpRemoveOps_V1): unknown;
    fromPartial(object: DeepPartial$b<OpRemoveOps_V1>): OpRemoveOps_V1;
};
interface OpRemoveOps_V2 {
    opIds: string[];
    removalType: OpRemoveOps_V2_UndoRedoType;
}
declare const OpRemoveOps_V2: {
    encode(message: OpRemoveOps_V2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpRemoveOps_V2;
    fromJSON(object: any): OpRemoveOps_V2;
    toJSON(message: OpRemoveOps_V2): unknown;
    fromPartial(object: DeepPartial$b<OpRemoveOps_V2>): OpRemoveOps_V2;
};
/**
 * Lines that appear on boards
 * newObjectId is the root id of the new annotation being drawn
 * objectId is the board being drawn on
 */
interface OpLine2d {
    v1?: OpLine2d_V1 | undefined;
}
declare const OpLine2d: {
    encode(message: OpLine2d, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpLine2d;
    fromJSON(object: any): OpLine2d;
    toJSON(message: OpLine2d): unknown;
    fromPartial(object: DeepPartial$b<OpLine2d>): OpLine2d;
};
interface OpLine2d_V1 {
    newObjectId: string;
    objectId?: ObjectId;
    visibleWithinState?: BoardState;
    points?: Float2Array;
    width: number;
    color?: Color4;
}
declare const OpLine2d_V1: {
    encode(message: OpLine2d_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpLine2d_V1;
    fromJSON(object: any): OpLine2d_V1;
    toJSON(message: OpLine2d_V1): unknown;
    fromPartial(object: DeepPartial$b<OpLine2d_V1>): OpLine2d_V1;
};
/**
 * Text that appears on boards
 * newObjectId is the root id of the new annotation being drawn
 * objectId is the board being drawn on
 */
interface OpText2d {
    v1?: OpText2d_V1 | undefined;
}
declare const OpText2d: {
    encode(message: OpText2d, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText2d;
    fromJSON(object: any): OpText2d;
    toJSON(message: OpText2d): unknown;
    fromPartial(object: DeepPartial$b<OpText2d>): OpText2d;
};
interface OpText2d_V1 {
    newObjectId: string;
    objectId?: ObjectId;
    visibleWithinState?: BoardState;
    point?: Float2;
    text: string;
    language: string;
    color?: Color4;
    size: number;
}
declare const OpText2d_V1: {
    encode(message: OpText2d_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText2d_V1;
    fromJSON(object: any): OpText2d_V1;
    toJSON(message: OpText2d_V1): unknown;
    fromPartial(object: DeepPartial$b<OpText2d_V1>): OpText2d_V1;
};
/** Used to update the language translation for a text object */
interface OpText2dModify {
    v1?: OpText2dModify_V1 | undefined;
}
declare const OpText2dModify: {
    encode(message: OpText2dModify, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText2dModify;
    fromJSON(object: any): OpText2dModify;
    toJSON(message: OpText2dModify): unknown;
    fromPartial(object: DeepPartial$b<OpText2dModify>): OpText2dModify;
};
interface OpText2dModify_V1 {
    objectId?: ObjectId;
    text: string;
    language: string;
    translatedFromText: string;
    translatedFromLanguage: string;
}
declare const OpText2dModify_V1: {
    encode(message: OpText2dModify_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText2dModify_V1;
    fromJSON(object: any): OpText2dModify_V1;
    toJSON(message: OpText2dModify_V1): unknown;
    fromPartial(object: DeepPartial$b<OpText2dModify_V1>): OpText2dModify_V1;
};
/**
 * Images that appear on boards
 * newObjectId is the root id of the new annotation being drawn
 * PlacementData is the board being drawn on, plus the position/rotation of the image on the board
 */
interface OpImage2d {
    v1?: OpImage2d_V1 | undefined;
}
declare const OpImage2d: {
    encode(message: OpImage2d, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpImage2d;
    fromJSON(object: any): OpImage2d;
    toJSON(message: OpImage2d): unknown;
    fromPartial(object: DeepPartial$b<OpImage2d>): OpImage2d;
};
interface OpImage2d_V1 {
    newObjectId: string;
    placementData?: Image2dPlacementData;
    contentId?: ImageContentType;
}
declare const OpImage2d_V1: {
    encode(message: OpImage2d_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpImage2d_V1;
    fromJSON(object: any): OpImage2d_V1;
    toJSON(message: OpImage2d_V1): unknown;
    fromPartial(object: DeepPartial$b<OpImage2d_V1>): OpImage2d_V1;
};
/**
 * Line that appears in space or on objects
 * newObjectId is the root id of the new annotation being drawn
 * objectId is optional, and it is the 3d part being drawn on
 */
interface OpLine3d {
    v1?: OpLine3d_V1 | undefined;
}
declare const OpLine3d: {
    encode(message: OpLine3d, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpLine3d;
    fromJSON(object: any): OpLine3d;
    toJSON(message: OpLine3d): unknown;
    fromPartial(object: DeepPartial$b<OpLine3d>): OpLine3d;
};
interface OpLine3d_V1 {
    newObjectId: string;
    objectId?: ObjectId;
    points?: Float3Array;
    normals?: Float3Array;
    width: number;
    color?: Color4;
}
declare const OpLine3d_V1: {
    encode(message: OpLine3d_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpLine3d_V1;
    fromJSON(object: any): OpLine3d_V1;
    toJSON(message: OpLine3d_V1): unknown;
    fromPartial(object: DeepPartial$b<OpLine3d_V1>): OpLine3d_V1;
};
/**
 * Text that appears on a 3d object in a callout
 * newObjectId is the root id of the new annotation being drawn
 * placementData is the object part this is attached to, as well as the positional offset of the annotation
 */
interface OpText3d {
    v1?: OpText3d_V1 | undefined;
}
declare const OpText3d: {
    encode(message: OpText3d, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText3d;
    fromJSON(object: any): OpText3d;
    toJSON(message: OpText3d): unknown;
    fromPartial(object: DeepPartial$b<OpText3d>): OpText3d;
};
interface OpText3d_V1 {
    newObjectId: string;
    placementData?: TagPlacementData;
    text: string;
    language: string;
    color?: Color4;
}
declare const OpText3d_V1: {
    encode(message: OpText3d_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText3d_V1;
    fromJSON(object: any): OpText3d_V1;
    toJSON(message: OpText3d_V1): unknown;
    fromPartial(object: DeepPartial$b<OpText3d_V1>): OpText3d_V1;
};
/** Updates the translation language of the op */
interface OpText3dModify {
    v1?: OpText3dModify_V1 | undefined;
}
declare const OpText3dModify: {
    encode(message: OpText3dModify, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText3dModify;
    fromJSON(object: any): OpText3dModify;
    toJSON(message: OpText3dModify): unknown;
    fromPartial(object: DeepPartial$b<OpText3dModify>): OpText3dModify;
};
interface OpText3dModify_V1 {
    objectId?: ObjectId;
    text: string;
    language: string;
    color?: Color4;
    translatedFromText: string;
    translatedFromLanguage: string;
}
declare const OpText3dModify_V1: {
    encode(message: OpText3dModify_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpText3dModify_V1;
    fromJSON(object: any): OpText3dModify_V1;
    toJSON(message: OpText3dModify_V1): unknown;
    fromPartial(object: DeepPartial$b<OpText3dModify_V1>): OpText3dModify_V1;
};
/**
 * Represents an image being placed on a 3d part in a callout (NOTE: this is NOT an image board)
 * newObjectId is the root id of the new annotation being drawn
 * placementData is the object part this is attached to, as well as the positional offset of the annotation
 */
interface OpImage3d {
    v1?: OpImage3d_V1 | undefined;
}
declare const OpImage3d: {
    encode(message: OpImage3d, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpImage3d;
    fromJSON(object: any): OpImage3d;
    toJSON(message: OpImage3d): unknown;
    fromPartial(object: DeepPartial$b<OpImage3d>): OpImage3d;
};
interface OpImage3d_V1 {
    newObjectId: string;
    placementData?: TagPlacementData;
    contentId?: ImageContentType;
}
declare const OpImage3d_V1: {
    encode(message: OpImage3d_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpImage3d_V1;
    fromJSON(object: any): OpImage3d_V1;
    toJSON(message: OpImage3d_V1): unknown;
    fromPartial(object: DeepPartial$b<OpImage3d_V1>): OpImage3d_V1;
};
interface OpUpdatePropertyValue {
    v1?: OpUpdatePropertyValue_V1 | undefined;
}
declare const OpUpdatePropertyValue: {
    encode(message: OpUpdatePropertyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpUpdatePropertyValue;
    fromJSON(object: any): OpUpdatePropertyValue;
    toJSON(message: OpUpdatePropertyValue): unknown;
    fromPartial(object: DeepPartial$b<OpUpdatePropertyValue>): OpUpdatePropertyValue;
};
interface OpUpdatePropertyValue_V1 {
    propId?: PropertyIdentifier;
    scalar?: ScalarPropertyAssignment | undefined;
    string?: StringPropertyAssignment | undefined;
    vector?: VectorPropertyAssignment | undefined;
    color?: ColorPropertyAssignment | undefined;
    transform?: TransformPropertyAssignment | undefined;
    boolean?: BooleanPropertyAssignment | undefined;
    json?: JsonPropertyAssignment | undefined;
    link?: LinkPropertyAssignment | undefined;
}
declare const OpUpdatePropertyValue_V1: {
    encode(message: OpUpdatePropertyValue_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpUpdatePropertyValue_V1;
    fromJSON(object: any): OpUpdatePropertyValue_V1;
    toJSON(message: OpUpdatePropertyValue_V1): unknown;
    fromPartial(object: DeepPartial$b<OpUpdatePropertyValue_V1>): OpUpdatePropertyValue_V1;
};
interface OpDeclareProperty {
    v1?: OpDeclareProperty_V1 | undefined;
}
declare const OpDeclareProperty: {
    encode(message: OpDeclareProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpDeclareProperty;
    fromJSON(object: any): OpDeclareProperty;
    toJSON(message: OpDeclareProperty): unknown;
    fromPartial(object: DeepPartial$b<OpDeclareProperty>): OpDeclareProperty;
};
interface OpDeclareProperty_V1 {
    propId?: PropertyIdentifier;
    decl?: AnyPropertyDeclaration;
}
declare const OpDeclareProperty_V1: {
    encode(message: OpDeclareProperty_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpDeclareProperty_V1;
    fromJSON(object: any): OpDeclareProperty_V1;
    toJSON(message: OpDeclareProperty_V1): unknown;
    fromPartial(object: DeepPartial$b<OpDeclareProperty_V1>): OpDeclareProperty_V1;
};
interface OpBlindDataOp {
    blindDataIdentifier: string;
    data: Uint8Array;
}
declare const OpBlindDataOp: {
    encode(message: OpBlindDataOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpBlindDataOp;
    fromJSON(object: any): OpBlindDataOp;
    toJSON(message: OpBlindDataOp): unknown;
    fromPartial(object: DeepPartial$b<OpBlindDataOp>): OpBlindDataOp;
};
interface UserAuthorityPayload {
    message?: string | undefined;
    /** Script update? = 11; */
    json?: string | undefined;
}
declare const UserAuthorityPayload: {
    encode(message: UserAuthorityPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserAuthorityPayload;
    fromJSON(object: any): UserAuthorityPayload;
    toJSON(message: UserAuthorityPayload): unknown;
    fromPartial(object: DeepPartial$b<UserAuthorityPayload>): UserAuthorityPayload;
};
interface OpUserAuthorityData {
    v1?: OpUserAuthorityData_V1 | undefined;
}
declare const OpUserAuthorityData: {
    encode(message: OpUserAuthorityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpUserAuthorityData;
    fromJSON(object: any): OpUserAuthorityData;
    toJSON(message: OpUserAuthorityData): unknown;
    fromPartial(object: DeepPartial$b<OpUserAuthorityData>): OpUserAuthorityData;
};
interface OpUserAuthorityData_V1 {
    authorityRequestedKey: string;
    coordinationEventType: OpUserAuthorityData_V1_AuthorityCoordinationEventEnum;
    requestorConnectionId: string;
    ordinal: number;
    payload?: UserAuthorityPayload;
}
declare const OpUserAuthorityData_V1: {
    encode(message: OpUserAuthorityData_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpUserAuthorityData_V1;
    fromJSON(object: any): OpUserAuthorityData_V1;
    toJSON(message: OpUserAuthorityData_V1): unknown;
    fromPartial(object: DeepPartial$b<OpUserAuthorityData_V1>): OpUserAuthorityData_V1;
};
interface OpSetPartHighlight {
    v1?: OpSetPartHighlight_V1 | undefined;
}
declare const OpSetPartHighlight: {
    encode(message: OpSetPartHighlight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpSetPartHighlight;
    fromJSON(object: any): OpSetPartHighlight;
    toJSON(message: OpSetPartHighlight): unknown;
    fromPartial(object: DeepPartial$b<OpSetPartHighlight>): OpSetPartHighlight;
};
interface OpSetPartHighlight_V1 {
    objectId?: ObjectId;
    set: boolean;
    highlightData?: PartHighlightData;
}
declare const OpSetPartHighlight_V1: {
    encode(message: OpSetPartHighlight_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpSetPartHighlight_V1;
    fromJSON(object: any): OpSetPartHighlight_V1;
    toJSON(message: OpSetPartHighlight_V1): unknown;
    fromPartial(object: DeepPartial$b<OpSetPartHighlight_V1>): OpSetPartHighlight_V1;
};
declare type Builtin$b = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$b<T> = T extends Builtin$b ? T : T extends Array<infer U> ? Array<DeepPartial$b<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$b<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$b<T[K]>;
} : Partial<T>;

declare enum Operation_OperationExecutionModeEnum {
    /** Standard - Normal user executed operations */
    Standard = 0,
    /** BlockUndo - Block operations were executed as a batch, and should be undone simultaneously with other operations in the same block */
    BlockUndo = 1,
    /** Automatic - Automatic operations were executed without user action; they should not be considered undoable. */
    Automatic = 2,
    UNRECOGNIZED = -1
}
/**
 * An Operation is the core element of the journal. The journal consists of a set of JournalEntry, each of which has one Operation. Every possible journal change
 * is represented by an Operation.
 */
interface Operation {
    /** OperationExecutionMode defines how this operation interacts with undo/redo. */
    OperationExecutionMode?: Operation_OperationExecutionModeEnum | undefined;
    /** If OperationExecutionMode is set to BlockUndo, OperationBatch identifies the set of operations to be blocked together for purposes of undo. */
    OperationBatch?: string | undefined;
    removeOps?: OpRemoveOps | undefined;
    line2d?: OpLine2d | undefined;
    text2d?: OpText2d | undefined;
    text2dModify?: OpText2dModify | undefined;
    image2d?: OpImage2d | undefined;
    line3d?: OpLine3d | undefined;
    text3d?: OpText3d | undefined;
    text3dModify?: OpText3dModify | undefined;
    image3d?: OpImage3d | undefined;
    createObject?: OpCreateObject | undefined;
    setPartHighlight?: OpSetPartHighlight | undefined;
    updatePropertyValue?: OpUpdatePropertyValue | undefined;
    declareProperty?: OpDeclareProperty | undefined;
    userAuthorityData?: OpUserAuthorityData | undefined;
    blindOp?: OpBlindDataOp | undefined;
}
declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial(object: DeepPartial$a<Operation>): Operation;
};
/**
 * Represents the creation of a new object or board
 * newObjectId is the root id of the new object being created
 * contentId references what the object will show (aka the image, pdf, or .holo)
 * placementData is it's potition in the room
 * importance is weather it will be loaded on a low-memory device (once the LOD system is working)
 */
interface OpCreateObject {
    v2?: OpCreateObject_V2 | undefined;
}
declare const OpCreateObject: {
    encode(message: OpCreateObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpCreateObject;
    fromJSON(object: any): OpCreateObject;
    toJSON(message: OpCreateObject): unknown;
    fromPartial(object: DeepPartial$a<OpCreateObject>): OpCreateObject;
};
interface OpCreateObject_V2 {
    newObjectId: string;
    contentId?: ObjectType;
    creatorId: string;
}
declare const OpCreateObject_V2: {
    encode(message: OpCreateObject_V2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpCreateObject_V2;
    fromJSON(object: any): OpCreateObject_V2;
    toJSON(message: OpCreateObject_V2): unknown;
    fromPartial(object: DeepPartial$a<OpCreateObject_V2>): OpCreateObject_V2;
};
declare type Builtin$a = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$a<T> = T extends Builtin$a ? T : T extends Array<infer U> ? Array<DeepPartial$a<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$a<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$a<T[K]>;
} : Partial<T>;

/** JournalEntry comprises the Journal. */
interface JournalEntry {
    /** Unique identifier and timestamp of this operation. */
    time?: Date;
    /** The connectionId of the user that issued this operation. */
    connectionId?: string | undefined;
    op?: Operation;
    /** If present, implies this journal entry represents the completion of a transient operation. */
    consumedTransientUniqueId?: string | undefined;
    id: string;
}
declare const JournalEntry: {
    encode(message: JournalEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JournalEntry;
    fromJSON(object: any): JournalEntry;
    toJSON(message: JournalEntry): unknown;
    fromPartial(object: DeepPartial$9<JournalEntry>): JournalEntry;
};
/** Journal is the full journal, composed of a sequence of JournalEntry */
interface Journal {
    entries?: JournalEntry[];
}
declare const Journal: {
    encode(message: Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Journal;
    fromJSON(object: any): Journal;
    toJSON(message: Journal): unknown;
    fromPartial(object: DeepPartial$9<Journal>): Journal;
};
interface OperationCollection {
    operations?: Operation[];
}
declare const OperationCollection: {
    encode(message: OperationCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationCollection;
    fromJSON(object: any): OperationCollection;
    toJSON(message: OperationCollection): unknown;
    fromPartial(object: DeepPartial$9<OperationCollection>): OperationCollection;
};
declare type Builtin$9 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$9<T> = T extends Builtin$9 ? T : T extends Array<infer U> ? Array<DeepPartial$9<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$9<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$9<T[K]>;
} : Partial<T>;

declare const journal_d_Journal: typeof Journal;
declare const journal_d_JournalEntry: typeof JournalEntry;
declare const journal_d_JournalEntryRaw: typeof JournalEntryRaw;
declare const journal_d_JournalEntryStorage: typeof JournalEntryStorage;
declare const journal_d_JournalEntryV1RawObsolete: typeof JournalEntryV1RawObsolete;
declare const journal_d_JournalRaw: typeof JournalRaw;
declare const journal_d_OperationCollection: typeof OperationCollection;
declare namespace journal_d {
  export {
    DeepPartial$f as DeepPartial,
    journal_d_Journal as Journal,
    journal_d_JournalEntry as JournalEntry,
    journal_d_JournalEntryRaw as JournalEntryRaw,
    journal_d_JournalEntryStorage as JournalEntryStorage,
    journal_d_JournalEntryV1RawObsolete as JournalEntryV1RawObsolete,
    journal_d_JournalRaw as JournalRaw,
    journal_d_OperationCollection as OperationCollection,
    protobufPackage$9 as protobufPackage,
  };
}

declare const journal_operations_d_OpBlindDataOp: typeof OpBlindDataOp;
declare const journal_operations_d_OpCreateObject: typeof OpCreateObject;
declare const journal_operations_d_OpCreateObject_V2: typeof OpCreateObject_V2;
declare const journal_operations_d_OpDeclareProperty: typeof OpDeclareProperty;
declare const journal_operations_d_OpDeclareProperty_V1: typeof OpDeclareProperty_V1;
declare const journal_operations_d_OpImage2d: typeof OpImage2d;
declare const journal_operations_d_OpImage2d_V1: typeof OpImage2d_V1;
declare const journal_operations_d_OpImage3d: typeof OpImage3d;
declare const journal_operations_d_OpImage3d_V1: typeof OpImage3d_V1;
declare const journal_operations_d_OpLine2d: typeof OpLine2d;
declare const journal_operations_d_OpLine2d_V1: typeof OpLine2d_V1;
declare const journal_operations_d_OpLine3d: typeof OpLine3d;
declare const journal_operations_d_OpLine3d_V1: typeof OpLine3d_V1;
declare const journal_operations_d_OpRemoveOps: typeof OpRemoveOps;
declare const journal_operations_d_OpRemoveOps_V1: typeof OpRemoveOps_V1;
type journal_operations_d_OpRemoveOps_V1_UndoRedoType = OpRemoveOps_V1_UndoRedoType;
declare const journal_operations_d_OpRemoveOps_V1_UndoRedoType: typeof OpRemoveOps_V1_UndoRedoType;
declare const journal_operations_d_OpRemoveOps_V2: typeof OpRemoveOps_V2;
type journal_operations_d_OpRemoveOps_V2_UndoRedoType = OpRemoveOps_V2_UndoRedoType;
declare const journal_operations_d_OpRemoveOps_V2_UndoRedoType: typeof OpRemoveOps_V2_UndoRedoType;
declare const journal_operations_d_OpSetPartHighlight: typeof OpSetPartHighlight;
declare const journal_operations_d_OpSetPartHighlight_V1: typeof OpSetPartHighlight_V1;
declare const journal_operations_d_OpText2d: typeof OpText2d;
declare const journal_operations_d_OpText2dModify: typeof OpText2dModify;
declare const journal_operations_d_OpText2dModify_V1: typeof OpText2dModify_V1;
declare const journal_operations_d_OpText2d_V1: typeof OpText2d_V1;
declare const journal_operations_d_OpText3d: typeof OpText3d;
declare const journal_operations_d_OpText3dModify: typeof OpText3dModify;
declare const journal_operations_d_OpText3dModify_V1: typeof OpText3dModify_V1;
declare const journal_operations_d_OpText3d_V1: typeof OpText3d_V1;
declare const journal_operations_d_OpUpdatePropertyValue: typeof OpUpdatePropertyValue;
declare const journal_operations_d_OpUpdatePropertyValue_V1: typeof OpUpdatePropertyValue_V1;
declare const journal_operations_d_OpUserAuthorityData: typeof OpUserAuthorityData;
declare const journal_operations_d_OpUserAuthorityData_V1: typeof OpUserAuthorityData_V1;
type journal_operations_d_OpUserAuthorityData_V1_AuthorityCoordinationEventEnum = OpUserAuthorityData_V1_AuthorityCoordinationEventEnum;
declare const journal_operations_d_OpUserAuthorityData_V1_AuthorityCoordinationEventEnum: typeof OpUserAuthorityData_V1_AuthorityCoordinationEventEnum;
declare const journal_operations_d_Operation: typeof Operation;
declare const journal_operations_d_OperationReferenceCollection: typeof OperationReferenceCollection;
declare const journal_operations_d_OperationReferenceCollection_ReferenceSinglesByConnection: typeof OperationReferenceCollection_ReferenceSinglesByConnection;
declare const journal_operations_d_OperationReferenceCollection_ReferenceTimeSpan: typeof OperationReferenceCollection_ReferenceTimeSpan;
type journal_operations_d_Operation_OperationExecutionModeEnum = Operation_OperationExecutionModeEnum;
declare const journal_operations_d_Operation_OperationExecutionModeEnum: typeof Operation_OperationExecutionModeEnum;
declare const journal_operations_d_UserAuthorityPayload: typeof UserAuthorityPayload;
declare const journal_operations_d_opRemoveOps_V1_UndoRedoTypeFromJSON: typeof opRemoveOps_V1_UndoRedoTypeFromJSON;
declare const journal_operations_d_opRemoveOps_V1_UndoRedoTypeToJSON: typeof opRemoveOps_V1_UndoRedoTypeToJSON;
declare const journal_operations_d_opRemoveOps_V2_UndoRedoTypeFromJSON: typeof opRemoveOps_V2_UndoRedoTypeFromJSON;
declare const journal_operations_d_opRemoveOps_V2_UndoRedoTypeToJSON: typeof opRemoveOps_V2_UndoRedoTypeToJSON;
declare const journal_operations_d_opUserAuthorityData_V1_AuthorityCoordinationEventEnumFromJSON: typeof opUserAuthorityData_V1_AuthorityCoordinationEventEnumFromJSON;
declare const journal_operations_d_opUserAuthorityData_V1_AuthorityCoordinationEventEnumToJSON: typeof opUserAuthorityData_V1_AuthorityCoordinationEventEnumToJSON;
declare namespace journal_operations_d {
  export {
    DeepPartial$b as DeepPartial,
    journal_operations_d_OpBlindDataOp as OpBlindDataOp,
    journal_operations_d_OpCreateObject as OpCreateObject,
    journal_operations_d_OpCreateObject_V2 as OpCreateObject_V2,
    journal_operations_d_OpDeclareProperty as OpDeclareProperty,
    journal_operations_d_OpDeclareProperty_V1 as OpDeclareProperty_V1,
    journal_operations_d_OpImage2d as OpImage2d,
    journal_operations_d_OpImage2d_V1 as OpImage2d_V1,
    journal_operations_d_OpImage3d as OpImage3d,
    journal_operations_d_OpImage3d_V1 as OpImage3d_V1,
    journal_operations_d_OpLine2d as OpLine2d,
    journal_operations_d_OpLine2d_V1 as OpLine2d_V1,
    journal_operations_d_OpLine3d as OpLine3d,
    journal_operations_d_OpLine3d_V1 as OpLine3d_V1,
    journal_operations_d_OpRemoveOps as OpRemoveOps,
    journal_operations_d_OpRemoveOps_V1 as OpRemoveOps_V1,
    journal_operations_d_OpRemoveOps_V1_UndoRedoType as OpRemoveOps_V1_UndoRedoType,
    journal_operations_d_OpRemoveOps_V2 as OpRemoveOps_V2,
    journal_operations_d_OpRemoveOps_V2_UndoRedoType as OpRemoveOps_V2_UndoRedoType,
    journal_operations_d_OpSetPartHighlight as OpSetPartHighlight,
    journal_operations_d_OpSetPartHighlight_V1 as OpSetPartHighlight_V1,
    journal_operations_d_OpText2d as OpText2d,
    journal_operations_d_OpText2dModify as OpText2dModify,
    journal_operations_d_OpText2dModify_V1 as OpText2dModify_V1,
    journal_operations_d_OpText2d_V1 as OpText2d_V1,
    journal_operations_d_OpText3d as OpText3d,
    journal_operations_d_OpText3dModify as OpText3dModify,
    journal_operations_d_OpText3dModify_V1 as OpText3dModify_V1,
    journal_operations_d_OpText3d_V1 as OpText3d_V1,
    journal_operations_d_OpUpdatePropertyValue as OpUpdatePropertyValue,
    journal_operations_d_OpUpdatePropertyValue_V1 as OpUpdatePropertyValue_V1,
    journal_operations_d_OpUserAuthorityData as OpUserAuthorityData,
    journal_operations_d_OpUserAuthorityData_V1 as OpUserAuthorityData_V1,
    journal_operations_d_OpUserAuthorityData_V1_AuthorityCoordinationEventEnum as OpUserAuthorityData_V1_AuthorityCoordinationEventEnum,
    journal_operations_d_Operation as Operation,
    OperationId$1 as OperationId,
    journal_operations_d_OperationReferenceCollection as OperationReferenceCollection,
    journal_operations_d_OperationReferenceCollection_ReferenceSinglesByConnection as OperationReferenceCollection_ReferenceSinglesByConnection,
    journal_operations_d_OperationReferenceCollection_ReferenceTimeSpan as OperationReferenceCollection_ReferenceTimeSpan,
    journal_operations_d_Operation_OperationExecutionModeEnum as Operation_OperationExecutionModeEnum,
    journal_operations_d_UserAuthorityPayload as UserAuthorityPayload,
    journal_operations_d_opRemoveOps_V1_UndoRedoTypeFromJSON as opRemoveOps_V1_UndoRedoTypeFromJSON,
    journal_operations_d_opRemoveOps_V1_UndoRedoTypeToJSON as opRemoveOps_V1_UndoRedoTypeToJSON,
    journal_operations_d_opRemoveOps_V2_UndoRedoTypeFromJSON as opRemoveOps_V2_UndoRedoTypeFromJSON,
    journal_operations_d_opRemoveOps_V2_UndoRedoTypeToJSON as opRemoveOps_V2_UndoRedoTypeToJSON,
    journal_operations_d_opUserAuthorityData_V1_AuthorityCoordinationEventEnumFromJSON as opUserAuthorityData_V1_AuthorityCoordinationEventEnumFromJSON,
    journal_operations_d_opUserAuthorityData_V1_AuthorityCoordinationEventEnumToJSON as opUserAuthorityData_V1_AuthorityCoordinationEventEnumToJSON,
    protobufPackage$6 as protobufPackage,
  };
}

declare function journalGet(api: CavrnusApi, roomId: string): Promise<Journal>;
declare function journalPostOpRemoveOp(api: CavrnusApiAuthorized, roomId: string, opIds: string[]): Promise<void>;
declare function journalPostOp(api: CavrnusApiAuthorized, roomId: string, op: Operation): Promise<void>;
declare function journalResolveRaw(entries: JournalEntryRaw[]): Journal;
declare function journalEntryResolveRaw(raw: JournalEntryRaw): JournalEntry;

interface PaginatedRequest {
    page?: number;
    limit?: number;
}
interface PaginatedResult<T> {
    docs: T[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}
declare function paginationAsQuery(req: PaginatedRequest): string;

declare type UserType = 'user' | 'customerAdmin' | 'guest';
declare type UserStatus = 'active' | 'deactivated' | 'pending';
interface UserListRequest extends PaginatedRequest {
    sortBy?: 'createdAt' | 'firstName' | 'lastName' | 'email';
    sortOrder?: 'asc' | 'desc';
    keywords?: string;
    types?: UserType[];
}
interface UserAvatarSelectionData$1 {
    type: 'content' | 'readyplayerme';
    contentId?: string;
}
interface UserAvatarData$1 {
    primaryColor?: string;
    secondaryColor?: string;
    avatarBody?: string;
    avatarBodyV2?: UserAvatarSelectionData$1;
    avatarHands?: string;
    showHandsLocal?: boolean;
    showHandsRemote?: boolean;
}
interface UserMetadata {
    _id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    screenName?: string;
    pictureUrl?: string;
    type?: UserType;
    userlocation?: string;
    avatarSelection?: UserAvatarData$1;
    createdAt?: string;
    modifiedAt?: string;
    creatingUser?: string;
    defaultRoomTemplates?: string[];
    keywords?: string[];
    status?: UserStatus;
    hidden?: boolean;
}
declare function usersGet(api: CavrnusApiAuthorized, req: UserListRequest): Promise<PaginatedResult<UserMetadata>>;
interface UserUpdateRequest {
    password?: string;
    screenName?: string;
    firstName?: string;
    lastName?: string;
    pictureUrl?: string;
    userlocation?: string;
    avatarData?: UserAvatarData$1;
    type?: UserType;
    status?: UserStatus;
}
interface UserCreationRequest extends UserUpdateRequest {
    email: string;
    customer: string;
}
declare function usersCreate(api: CavrnusApiAuthorized, req: UserCreationRequest): Promise<IdResult>;
declare function usersUpdate(api: CavrnusApiAuthorized, userId: string, req: UserUpdateRequest): Promise<UserMetadata>;
declare function userDelete(api: CavrnusApiAuthorized, userId: string): Promise<void>;
interface UserPictureUploadRequest {
    filename: string;
}
declare function userPictureUpdate(api: CavrnusApiUser, req: UserPictureUploadRequest, file: File): Promise<void>;
interface UserForgotPasswordRequest {
    email: string;
    customer: {
        _id: string;
    };
}
declare function userForgotPassword(api: CavrnusApi, req: UserForgotPasswordRequest): Promise<void>;

interface CommonSystemSettings {
    tutorialRoomId?: string;
    applicationVersion?: string;
    applicationUrl?: string;
    applicationVersionAndroid?: string;
    applicationUrlAndroid?: string;
    applicationVersionPico?: string;
    applicationUrlPico?: string;
    applicationVersionFocus?: string;
    applicationUrlFocus?: string;
    applicationVersionOculusQuest?: string;
    applicationUrlOculusQuest?: string;
    applicationVersionMacOS?: string;
    applicationUrlMacOS?: string;
    applicationVersionIOS?: string;
    applicationUrlIOS?: string;
    applicationVersionMagicLeap?: string;
    applicationUrlMagicLeap?: string;
    userMessage?: string;
    updateMessage?: string;
}
interface SystemSettings extends CommonSystemSettings {
    importerVersion?: string;
    importerUrl?: string;
    importerSecondaryVersion?: string;
    importerSecondaryUrl?: string;
    rtpluginVersion?: string;
    rtpluginUrl?: string;
    ueAppVersion?: string;
    ueAppUrl?: string;
    sdkVersion?: string;
    sdkUrl?: string;
    processRendererVersion?: string;
    processRendererUrl?: string;
    processRendererServiceVersion?: string;
    processRendererServiceUrl?: string;
    processImporterServiceVersion?: string;
    processImporterServiceUrl?: string;
    defaultRoomTemplates?: string[];
    machineId?: string;
    region?: string;
    minimumRequiredClientVersion?: string;
    databaseVersionOrdinal?: number;
}
interface ServerSettings extends SystemSettings {
    uniqueVersionKey?: string;
}
declare function settingsSystemGet(api: CavrnusApi): Promise<ServerSettings>;
declare function settingsCustomerGet(api: CavrnusApi, domain: string): Promise<ServerSettings>;
interface CustomerDomainSettings {
    allowedLoginMethods: Array<'email'>;
}
declare function settingsDomainGet(api: CavrnusApi, domain: string): Promise<CustomerDomainSettings>;

declare type CustomerFeature = 'auth-ad' | 'powertools' | 'translation' | 'sdk' | 'mfa' | 'guest-access' | 'saml2' | 'scim2';
declare type CustomerStatus = 'active' | 'suspended';
interface CustomerProfile {
    _id: string;
    customerId?: string;
    email?: string;
    domain?: string;
    internal?: boolean;
    name?: string;
    status?: string;
    allowedLoginMethods?: string[];
    allowedFeatures?: CustomerFeature[];
    createdAt?: string;
    modifiedAt?: string;
    defaultRoomTemplates?: string[];
    keywords?: string[];
    pictureUrl?: string;
    watermarkUrl?: string;
    watermarkEnabled?: boolean;
}
interface CustomerUpdate {
    email: string;
    name: string;
    watermarkEnabled?: boolean;
}
interface CustomerADConfig {
    baseDN?: string;
    enabled: boolean;
    host?: string;
    username?: string;
    password?: string;
    ssl?: boolean;
}
interface CustomerGuestAccessConfig {
    defaultTtl: Number;
}
interface CustomerMFAConfig {
    allowedMethods: string[];
    enabled: boolean;
    required: boolean;
}
interface CustomerSaml2Config {
    enabled: boolean;
    idp?: {
        issuer?: string;
        name?: string;
        ssoUrl?: string;
        x509Cert?: string;
    };
}
interface CustomerSettingsThemeColors {
    primary?: string;
    secondary?: string;
    accent?: string;
}
interface CustomerSettingsThemeConfig {
    colors?: CustomerSettingsThemeColors;
    images?: CustomerSettingsThemeImages;
}
interface CustomerSettingsThemeImages {
    favicon?: string;
    icon?: string;
    logo?: string;
}
interface CustomerSettingsUrlsConfig {
    contact?: string;
    home?: string;
    privacy?: string;
    tou?: string;
}
interface CustomerWhiteLabelSourcePackage {
    packageUrl?: string;
    length?: number;
    md5Hash?: string;
    algorithm?: string;
    password?: string;
}
interface CustomerSettings {
    adConfig?: CustomerADConfig;
    createdAt?: string;
    customerId?: string;
    displayName?: string;
    guestAccess?: CustomerGuestAccessConfig;
    mfaConfig?: CustomerMFAConfig;
    modifiedAt?: string;
    saml2Config?: CustomerSaml2Config;
    whitelabelSourcePackage?: CustomerWhiteLabelSourcePackage;
    systemLinks?: CommonSystemSettings;
    theme?: CustomerSettingsThemeConfig;
    urls?: CustomerSettingsUrlsConfig;
}
declare class MfaMethod {
    static readonly email = "email";
    static readonly sms = "sms";
    static readonly totp = "totp";
}
declare function customerSelfGet(api: CavrnusApiUser): Promise<CustomerProfile>;
declare function customerUpdate(api: CavrnusApiUser, req: CustomerUpdate): Promise<CustomerProfile>;
declare function customerSettingsSelfGet(api: CavrnusApiUser): Promise<CustomerSettings>;
declare function customerSettingsGet(api: CavrnusApiAuthorized, customerId: string): Promise<CustomerSettings>;
declare function customerSettingsSet(api: CavrnusApiAuthorized, customerId: string, settings: CustomerSettings): Promise<void>;
interface CustomerPictureUploadRequest {
    filename: string;
}
declare function customerUpdatePicture(api: CavrnusApiUser, req: CustomerPictureUploadRequest, file: File): Promise<CustomerProfile>;
declare function customerDeletePicture(api: CavrnusApiUser): Promise<void>;
declare function customerUpdateWatermark(api: CavrnusApiUser, req: CustomerPictureUploadRequest, file: File): Promise<CustomerProfile>;
declare function customerInviteUsers(api: CavrnusApiUser, invites: {
    email: string;
    type: UserType;
}[]): Promise<void>;
interface CustomerInvite {
    email: string;
    type: UserType;
    createdAt: string;
}
declare function customerInvitesGet(api: CavrnusApiAuthorized): Promise<CustomerInvite[]>;
declare function customerRemoveInvite(api: CavrnusApiAuthorized, customerId: string, email: string): Promise<void>;
interface CustomerSubscription {
    createdAt: string;
    expiresAt: string;
    modifiedAt: string;
    userSeatCount: number;
    guestSeatCount: number;
}
declare function customerSubscriptionGet(api: CavrnusApiAuthorized, customerId: string): Promise<CustomerSubscription>;
interface UploadWhitelabelPackageRequest {
    md5Hash?: string;
    filelength: number;
}
declare function customerWhitelabelPackageUpload(api: CavrnusApiAuthorized, file: Uint8Array, req: UploadWhitelabelPackageRequest): Promise<void>;
declare function emptyCustomerData(): CustomerProfile;

interface UserProfile {
    _id: string;
    email: string;
    screenName?: string;
    firstName?: string;
    lastName?: string;
    pictureUrl?: string;
    location?: string;
    avatarData?: any;
    customer?: CustomerProfile;
    type: 'user' | 'customerAdmin' | 'guest';
    defaultRoomTemplates?: string[];
}
declare function profileGet(api: CavrnusApiUser): Promise<UserProfile>;
declare function profileOtherGet(api: CavrnusApiUser, userId: string): Promise<UserProfile>;
interface UserProfilePatch {
    screenName?: string;
    firstName?: string;
    lastName?: string;
    pictureUrl?: string;
    location?: string;
    avatarData?: string;
}
declare function profilePatch(api: CavrnusApiUser, req: UserProfilePatch): Promise<void>;

interface LoginRequest {
    email: string;
    password: string;
}
declare function loginUser(api: CavrnusApi, req: LoginRequest): Promise<CavrnusApiUser>;
declare function loginTestToken(api: CavrnusApiUser): Promise<boolean>;

interface RoomCreation {
    name: string;
    description?: string;
    roomAccess?: 'membersOnly' | 'linkAllowOnly' | 'linkAllowAndAdd';
    roomUserCategory?: string;
    roomUserSort?: number;
    watermarkEnabled?: boolean;
    keywords?: string[];
}
interface RoomUpdate extends RoomCreation {
}
interface RoomCommon extends RoomUpdate {
    _id: string;
    createdAt?: string;
    modifiedAt?: string;
}
interface Room extends RoomCommon {
    owner?: string;
    members?: RoomMember[];
    thumbnailContentUrl?: string;
}
interface RoomMember {
    email: string;
    type: string;
    status: string;
    online: boolean;
    hidden: boolean;
    inviteDate?: string;
    lastAccess?: string;
    userCategory?: string;
    userSort?: number;
}
interface RoomMemberMetadataPatch {
    hidden?: boolean;
    userCategory?: string;
    userSort?: number;
}
declare function roomGetParticipating(api: CavrnusApiUser): Promise<Room[]>;
declare function roomGetMyMembershipInfo(room: Room, userEmail: string): RoomMember | undefined;
declare function roomGetForCustomer(api: CavrnusApiUser): Promise<Room[]>;
declare function roomTemplatesGet(api: CavrnusApiUser): Promise<Room[]>;
declare function roomGet(api: CavrnusApiAuthorized, roomId: string): Promise<Room>;
declare function roomCreate(api: CavrnusApiAuthorized, creation: RoomCreation): Promise<Room>;
declare function roomUpdate(api: CavrnusApiAuthorized, roomId: string, patch: RoomUpdate): Promise<Room>;
interface RoomCloneRequest {
    name: string;
    description?: string;
    environment?: string;
    roomAccess?: 'membersOnly' | 'linkAllowOnly' | 'linkAllowAndAdd' | 'copy';
}
interface RoomIdResult {
    roomId: string;
}
declare function roomClone(api: CavrnusApi, roomId: string, newRoomParams: RoomCloneRequest): Promise<RoomIdResult>;
interface RoomInvitationRequest {
    emails: string[];
    message?: string;
    sendemail?: boolean;
    guestAccess: {
        forceAll?: boolean;
    };
}
interface RoomInvitationResponse {
    memberRecipients: string[];
    guestRecipients: string[];
}
declare function roomInviteNew(api: CavrnusApiUser, roomId: string, invitation: RoomInvitationRequest): Promise<RoomInvitationResponse>;
interface RoomTemplatizeRequest {
    name: string;
    description?: string;
}
declare function roomTemplatize(api: CavrnusApiUser, roomId: string, req: RoomTemplatizeRequest): Promise<IdResult>;
declare function roomHide(api: CavrnusApiUser, roomId: string): Promise<void>;
declare function roomUnhide(api: CavrnusApiUser, roomId: string): Promise<void>;
declare function roomMemberUpdate(api: CavrnusApiUser, roomId: string, patch: RoomMemberMetadataPatch): Promise<void>;
declare function roomMemberDelete(api: CavrnusApiUser, roomId: string, userIdsOrEmails: string[]): Promise<void>;
declare function roomLeave(api: CavrnusApiUser, roomId: string): Promise<void>;
declare function roomDelete(api: CavrnusApiAuthorized, roomId: string): Promise<void>;
declare function roomMessage(api: CavrnusApiUser, roomId: string, msg: {
    message: string;
}): Promise<string>;
interface JoinCode {
    id: string;
    createdAt?: string;
    customer?: string;
    expiresAt?: string;
    maxUses: number;
    room?: string;
    uses: number;
}
declare function roomGetJoinCode(api: CavrnusApiUser, roomId: string): Promise<JoinCode>;
interface RoomCreateJoinCodeRequest {
    expiresAfter?: number;
    maxUses?: number;
}
declare function roomCreateJoinCode(api: CavrnusApiUser, roomId: string, createReq: RoomCreateJoinCodeRequest): Promise<JoinCode>;
declare function roomDeleteJoinCode(api: CavrnusApiUser, roomId: string, joinCode: string): Promise<JoinCode>;
interface RoomUpdateMembershipMetadata {
    hidden: boolean;
    userCategory: string;
    userSort: number;
}
declare function roomUpdateMembershipMetadata(api: CavrnusApiUser, roomId: string, req: RoomUpdateMembershipMetadata): Promise<void>;
interface RoomObjectsResponse {
    objectIds: string[];
}
declare function roomGetObjectsInUse(api: CavrnusApiAuthorized, roomId: string): Promise<RoomObjectsResponse>;
interface RoomJournalInfo {
    count: number;
    totalbytes: number;
}
declare function roomGetJournalInfo(api: CavrnusApiAuthorized, roomId: string): Promise<RoomJournalInfo>;
declare function roomGetTransientJournalInfo(api: CavrnusApiAuthorized, roomId: string): Promise<RoomJournalInfo>;

declare type HealthServiceStatus = 'healthy' | 'unhealthy';
interface HealthStatusService {
    id: string;
    name: string;
    state: HealthStatusService;
    msg?: string;
    services: HealthStatusService[];
}
interface HealthStatus {
    services: HealthStatusService[];
}
declare function healthStatusGet(api: CavrnusApi): Promise<HealthStatus>;

declare type ObjectUsage = 'object' | 'environment' | 'avatarbody' | 'avatarhands' | 'lighting';
declare type ObjectCategory = 'object' | 'processedobject' | 'image' | 'environmentcontent' | 'pagecontent' | 'processedvideocontent' | 'annorecordfiles' | 'lighting' | 'unknown' | 'undetermined' | 'script';
declare type ObjectAssetCategoryEnum = 'canonical' | 'lod';
interface ObjectContent {
    url?: string;
    length?: number;
    md5Hash?: string;
    geometryCost?: number;
    textureCost?: number;
}
interface ObjectAssetData$1 {
    url: string;
    length: number;
    md5Hash: string;
    assetCategory: ObjectAssetCategoryEnum;
}
interface ImportContent {
    uploadContentUrl?: string;
    uploadContentLength?: number;
    uploadContentMd5Hash?: string;
    primaryFile?: string;
    importWorkId?: string;
    lastProgressMessage?: string;
    lastProgress?: number;
}
interface HoloObjectMetadata$1 {
    mnx?: number;
    mny?: number;
    mnz?: number;
    mxx?: number;
    mxy?: number;
    mxz?: number;
    holoVersion?: string;
    metadata?: Record<string, string>;
}
interface ScriptObjectMetadata$1 {
    moduleName?: string;
    moduleVersion?: string;
    metadata?: Record<string, string>;
}
declare type ObjectMemberEntityType$1 = 'user' | 'customer' | 'system';
declare type ObjectMemberAccess$1 = 'owner' | 'viewer' | 'none';
declare type ObjectMemberUserSetArchived = 'archived';
declare const ObjectMemberUsetSetArchivedValue: ObjectMemberUserSetArchived;
declare type ObjectMemberUserSetNonbrowsable = 'nonbrowsable';
declare const ObjectMemberUserSetNonbrowsableValue: ObjectMemberUserSetNonbrowsable;
declare type ObjectMemberUserCategoryQuickAccess = 'quickaccess';
declare const ObjectMemberUserCategoryQuickAccessValue: ObjectMemberUserCategoryQuickAccess;
declare type ObjectAssetCategoryType = 'canonical' | 'lod' | 'unrecognized';
interface ObjectMember$1 {
    entityId?: string;
    entityType?: ObjectMemberEntityType$1;
    access?: ObjectMemberAccess$1;
    lastUsage?: string;
    userSet?: ObjectMemberUserSetArchived | ObjectMemberUserSetNonbrowsable | string;
    userCategory?: ObjectMemberUserCategoryQuickAccess | string;
    userSort?: number;
    quickaccess?: boolean;
}
interface ObjectData$1 {
    _id: string;
    members?: ObjectMember$1[];
    password?: string;
    algorithm?: string;
    category?: ObjectCategory;
    usage?: ObjectUsage;
    filename?: string;
    name?: string;
    instanceOfObject?: string;
    createdAt?: string;
    keywords?: string[];
    sourceMd5Hash?: string;
    assets?: ObjectAssetData$1[];
    thumbnail?: ObjectContent;
    importSource?: ImportContent;
    holoMetadata?: HoloObjectMetadata$1;
    scriptMetadata?: ScriptObjectMetadata$1;
    metadata?: Record<string, string>;
    creator?: string;
    customer?: string;
}
declare function objectsGet(api: CavrnusApiAuthorized, objectId: string): Promise<ObjectData$1>;
interface ObjectsListRequest extends PaginatedRequest {
    sortBy?: 'createdAt' | 'firstName' | 'lastName' | 'email';
    sortOrder?: 'asc' | 'desc';
    keywords?: string;
}
declare function objectsGetAll(api: CavrnusApiAuthorized, req: ObjectsListRequest): Promise<PaginatedResult<ObjectData$1>>;
declare function objectsGetAllForCustomer(api: CavrnusApiAuthorized, req: ObjectsListRequest): Promise<PaginatedResult<ObjectData$1>>;
declare function objectGetMembership(userProfile: UserProfile, customerProfile: CustomerProfile, objectData: ObjectData$1): ObjectMember$1 | undefined;
declare function objectDownloadAssetDecrypted(apiu: CavrnusApi, ob: ObjectData$1, assetCategory: ObjectAssetCategoryEnum, outStream: stream.Writable): Promise<void>;
interface ObjectUpdateAdmin {
    name?: string;
    members?: ObjectMember$1[];
}
declare function objectUpdate(api: CavrnusApiAuthorized, objectId: string, patch: ObjectUpdateAdmin): Promise<ObjectData$1>;
interface ObjectInRoomsResponse {
    roomIds: string[];
}
declare function objectGetRoomUsage(api: CavrnusApiAuthorized, objectId: string): Promise<ObjectInRoomsResponse>;
declare function objectDelete(api: CavrnusApiAuthorized, objectId: string): Promise<void>;
interface UploadObjectFileRequest {
    filename: string;
    name?: string;
    category?: ObjectCategory;
    usage: ObjectUsage;
    keyword1?: string;
    keyword2?: string;
    keyword3?: string;
    objectMetadata?: Record<string, string>;
    nothumbnailgen?: boolean;
    userSet?: string;
    userCategory?: string;
    userSort?: number;
    quickaccess?: boolean;
    moduleName?: string;
    moduleVersion?: string;
}
interface UploadObjectRequest {
    filename: string;
    name?: string;
    md5Hash: string;
    filelength: number;
    category: ObjectCategory;
    usage: ObjectUsage;
    aabb?: AxisAlignedBoundingBox;
    holoVersion?: string;
    holoMetadata?: Record<string, string>;
    objectMetadata?: Record<string, string>;
    keyword1?: string;
    keyword2?: string;
    keyword3?: string;
    nothumbnailgen?: boolean;
    userSet?: string;
    userCategory?: string;
    userSort?: number;
    quickaccess?: boolean;
    moduleName?: string;
    moduleVersion?: string;
    assetCategory?: ObjectAssetCategoryType;
}
declare const objectExtensionsImages: string[];
declare const objectExtensionsText: string[];
declare const objectExtensionsOpaqueTextures: string[];
declare const objectExtensionsTransparentTextures: string[];
declare const objectExtensionsTextures: string[];
declare const objectExtensionsPageContent: string[];
declare const objectExtensionsProcessedVideoContent: string[];
declare const objectExtensionsProcessedObjects: string[];
declare const objectExtensionsEnvironmentContent: string[];
declare const objectExtensionsAnnoRecordFiles: string[];
declare const objectExtensionsSimLabImporterFileTypes: string[];
declare const objectExtensionsHoopsImporterFileTypes: string[];
declare const objectExtensionsImportableObjects: string[];
declare const objectExtensionsLightingFileTypes: string[];
declare const objectExtensionsScriptTypes: string[];
declare function objectCategoryFromExtension(ext: string): ObjectCategory;
declare function objectUploadFile(api: CavrnusApiAuthorized, file: Uint8Array, sreq: UploadObjectFileRequest): Promise<ObjectData$1>;
declare function objectUpload(api: CavrnusApiAuthorized, file: Uint8Array, req: UploadObjectRequest): Promise<ObjectData$1>;
interface UpdateObjectMemberRequest {
    access?: ObjectMemberAccess$1;
    userSet?: string;
    userCategory?: string;
    userSort?: number;
    quickaccess?: boolean;
}
declare function objectMemberUpdate(api: CavrnusApiAuthorized, objectId: string, entityType: ObjectMemberEntityType$1, entityId: string, req: UpdateObjectMemberRequest): Promise<ObjectData$1>;
interface ObjectInstantiateRequest {
    instanceOwner?: string;
    objectMetadata?: Record<string, string>;
    keyword1?: string;
    keyword2?: string;
    keyword3?: string;
    name?: string;
    userSet?: string;
    userCategory?: string;
    userSort?: number;
    quickaccess?: boolean;
}
declare function objectCreateInstantiation(api: CavrnusApiUser, toClone: string, req: ObjectInstantiateRequest): Promise<ObjectData$1>;

interface EncryptedContentSource {
    url?: string;
    algorithm?: string;
    password?: string;
}
declare function contentDecryptor(ob: EncryptedContentSource, outStream: stream.Writable): Promise<void>;

declare type StreamClientSessionStatus = 'active' | 'pending' | 'queued';
interface StreamClientSession {
    created: Date;
    expires: Date;
    id: string;
    joinCode?: string;
    room?: string;
    pinged: Date;
    status: StreamClientSessionStatus;
    updated: Date;
    user?: string;
}
interface StreamClientSessionResponse {
    position?: number;
    provider?: string;
    session?: StreamClientSession;
    streamUrl?: string;
}
interface CreateStreamClientSessionRequest {
    roomId?: string;
    joinCodeId?: string;
}
declare type CreateStreamClientSessionResponse = StreamClientSessionResponse;
declare function streamClientCreateSession(api: CavrnusApiUser, req: CreateStreamClientSessionRequest): Promise<CreateStreamClientSessionResponse>;
interface PingStreamClientSessionRequest {
    sessionId: string;
}
declare type PingStreamClientSessionResponse = StreamClientSessionResponse;
declare function streamClientPingSession(api: CavrnusApiUser, req: PingStreamClientSessionRequest): Promise<PingStreamClientSessionResponse>;
interface ResumeStreamClientSessionRequest {
    sessionId: string;
}
interface ResumeStreamClientSessionResponse {
    streamUrl?: string;
}
declare function streamClientResumeSession(api: CavrnusApiUser, req: ResumeStreamClientSessionRequest): Promise<ResumeStreamClientSessionResponse>;

type index_d$4_CavrnusApi = CavrnusApi;
declare const index_d$4_CavrnusApi: typeof CavrnusApi;
type index_d$4_CavrnusApiAuthorized = CavrnusApiAuthorized;
declare const index_d$4_CavrnusApiAuthorized: typeof CavrnusApiAuthorized;
type index_d$4_CavrnusApiUser = CavrnusApiUser;
declare const index_d$4_CavrnusApiUser: typeof CavrnusApiUser;
type index_d$4_CommonSystemSettings = CommonSystemSettings;
type index_d$4_CreateStreamClientSessionRequest = CreateStreamClientSessionRequest;
type index_d$4_CreateStreamClientSessionResponse = CreateStreamClientSessionResponse;
type index_d$4_CustomerADConfig = CustomerADConfig;
type index_d$4_CustomerDomainSettings = CustomerDomainSettings;
type index_d$4_CustomerFeature = CustomerFeature;
type index_d$4_CustomerGuestAccessConfig = CustomerGuestAccessConfig;
type index_d$4_CustomerInvite = CustomerInvite;
type index_d$4_CustomerMFAConfig = CustomerMFAConfig;
type index_d$4_CustomerPictureUploadRequest = CustomerPictureUploadRequest;
type index_d$4_CustomerProfile = CustomerProfile;
type index_d$4_CustomerSaml2Config = CustomerSaml2Config;
type index_d$4_CustomerSettings = CustomerSettings;
type index_d$4_CustomerSettingsThemeColors = CustomerSettingsThemeColors;
type index_d$4_CustomerSettingsThemeConfig = CustomerSettingsThemeConfig;
type index_d$4_CustomerSettingsThemeImages = CustomerSettingsThemeImages;
type index_d$4_CustomerSettingsUrlsConfig = CustomerSettingsUrlsConfig;
type index_d$4_CustomerStatus = CustomerStatus;
type index_d$4_CustomerSubscription = CustomerSubscription;
type index_d$4_CustomerUpdate = CustomerUpdate;
type index_d$4_CustomerWhiteLabelSourcePackage = CustomerWhiteLabelSourcePackage;
type index_d$4_EncryptedContentSource = EncryptedContentSource;
type index_d$4_HealthServiceStatus = HealthServiceStatus;
type index_d$4_HealthStatus = HealthStatus;
type index_d$4_HealthStatusService = HealthStatusService;
type index_d$4_IdResult = IdResult;
type index_d$4_ImportContent = ImportContent;
type index_d$4_JoinCode = JoinCode;
type index_d$4_LoginRequest = LoginRequest;
type index_d$4_LoginType = LoginType;
type index_d$4_MfaMethod = MfaMethod;
declare const index_d$4_MfaMethod: typeof MfaMethod;
type index_d$4_ObjectAssetCategoryEnum = ObjectAssetCategoryEnum;
type index_d$4_ObjectAssetCategoryType = ObjectAssetCategoryType;
type index_d$4_ObjectCategory = ObjectCategory;
type index_d$4_ObjectContent = ObjectContent;
type index_d$4_ObjectInRoomsResponse = ObjectInRoomsResponse;
type index_d$4_ObjectInstantiateRequest = ObjectInstantiateRequest;
type index_d$4_ObjectMemberUserCategoryQuickAccess = ObjectMemberUserCategoryQuickAccess;
declare const index_d$4_ObjectMemberUserCategoryQuickAccessValue: typeof ObjectMemberUserCategoryQuickAccessValue;
type index_d$4_ObjectMemberUserSetArchived = ObjectMemberUserSetArchived;
type index_d$4_ObjectMemberUserSetNonbrowsable = ObjectMemberUserSetNonbrowsable;
declare const index_d$4_ObjectMemberUserSetNonbrowsableValue: typeof ObjectMemberUserSetNonbrowsableValue;
declare const index_d$4_ObjectMemberUsetSetArchivedValue: typeof ObjectMemberUsetSetArchivedValue;
type index_d$4_ObjectUpdateAdmin = ObjectUpdateAdmin;
type index_d$4_ObjectUsage = ObjectUsage;
type index_d$4_ObjectsListRequest = ObjectsListRequest;
type index_d$4_PaginatedRequest = PaginatedRequest;
type index_d$4_PaginatedResult<T> = PaginatedResult<T>;
type index_d$4_PingStreamClientSessionRequest = PingStreamClientSessionRequest;
type index_d$4_PingStreamClientSessionResponse = PingStreamClientSessionResponse;
type index_d$4_ResumeStreamClientSessionRequest = ResumeStreamClientSessionRequest;
type index_d$4_ResumeStreamClientSessionResponse = ResumeStreamClientSessionResponse;
type index_d$4_Room = Room;
type index_d$4_RoomCloneRequest = RoomCloneRequest;
type index_d$4_RoomCommon = RoomCommon;
type index_d$4_RoomCreateJoinCodeRequest = RoomCreateJoinCodeRequest;
type index_d$4_RoomCreation = RoomCreation;
type index_d$4_RoomIdResult = RoomIdResult;
type index_d$4_RoomInvitationRequest = RoomInvitationRequest;
type index_d$4_RoomInvitationResponse = RoomInvitationResponse;
type index_d$4_RoomJournalInfo = RoomJournalInfo;
type index_d$4_RoomMember = RoomMember;
type index_d$4_RoomMemberMetadataPatch = RoomMemberMetadataPatch;
type index_d$4_RoomObjectsResponse = RoomObjectsResponse;
type index_d$4_RoomTemplatizeRequest = RoomTemplatizeRequest;
type index_d$4_RoomUpdate = RoomUpdate;
type index_d$4_RoomUpdateMembershipMetadata = RoomUpdateMembershipMetadata;
type index_d$4_ServerSettings = ServerSettings;
type index_d$4_StreamClientSession = StreamClientSession;
type index_d$4_StreamClientSessionResponse = StreamClientSessionResponse;
type index_d$4_StreamClientSessionStatus = StreamClientSessionStatus;
type index_d$4_SystemSettings = SystemSettings;
type index_d$4_UpdateObjectMemberRequest = UpdateObjectMemberRequest;
type index_d$4_UploadObjectFileRequest = UploadObjectFileRequest;
type index_d$4_UploadObjectRequest = UploadObjectRequest;
type index_d$4_UploadWhitelabelPackageRequest = UploadWhitelabelPackageRequest;
type index_d$4_UserCreationRequest = UserCreationRequest;
type index_d$4_UserForgotPasswordRequest = UserForgotPasswordRequest;
type index_d$4_UserListRequest = UserListRequest;
type index_d$4_UserMetadata = UserMetadata;
type index_d$4_UserPictureUploadRequest = UserPictureUploadRequest;
type index_d$4_UserProfile = UserProfile;
type index_d$4_UserProfilePatch = UserProfilePatch;
type index_d$4_UserStatus = UserStatus;
type index_d$4_UserType = UserType;
type index_d$4_UserUpdateRequest = UserUpdateRequest;
declare const index_d$4_contentDecryptor: typeof contentDecryptor;
declare const index_d$4_customerDeletePicture: typeof customerDeletePicture;
declare const index_d$4_customerInviteUsers: typeof customerInviteUsers;
declare const index_d$4_customerInvitesGet: typeof customerInvitesGet;
declare const index_d$4_customerRemoveInvite: typeof customerRemoveInvite;
declare const index_d$4_customerSelfGet: typeof customerSelfGet;
declare const index_d$4_customerSettingsGet: typeof customerSettingsGet;
declare const index_d$4_customerSettingsSelfGet: typeof customerSettingsSelfGet;
declare const index_d$4_customerSettingsSet: typeof customerSettingsSet;
declare const index_d$4_customerSubscriptionGet: typeof customerSubscriptionGet;
declare const index_d$4_customerUpdate: typeof customerUpdate;
declare const index_d$4_customerUpdatePicture: typeof customerUpdatePicture;
declare const index_d$4_customerUpdateWatermark: typeof customerUpdateWatermark;
declare const index_d$4_customerWhitelabelPackageUpload: typeof customerWhitelabelPackageUpload;
declare const index_d$4_emptyCustomerData: typeof emptyCustomerData;
declare const index_d$4_healthStatusGet: typeof healthStatusGet;
declare const index_d$4_journalEntryResolveRaw: typeof journalEntryResolveRaw;
declare const index_d$4_journalGet: typeof journalGet;
declare const index_d$4_journalPostOp: typeof journalPostOp;
declare const index_d$4_journalPostOpRemoveOp: typeof journalPostOpRemoveOp;
declare const index_d$4_journalResolveRaw: typeof journalResolveRaw;
declare const index_d$4_loginTestToken: typeof loginTestToken;
declare const index_d$4_loginUser: typeof loginUser;
declare const index_d$4_objectCategoryFromExtension: typeof objectCategoryFromExtension;
declare const index_d$4_objectCreateInstantiation: typeof objectCreateInstantiation;
declare const index_d$4_objectDelete: typeof objectDelete;
declare const index_d$4_objectDownloadAssetDecrypted: typeof objectDownloadAssetDecrypted;
declare const index_d$4_objectExtensionsAnnoRecordFiles: typeof objectExtensionsAnnoRecordFiles;
declare const index_d$4_objectExtensionsEnvironmentContent: typeof objectExtensionsEnvironmentContent;
declare const index_d$4_objectExtensionsHoopsImporterFileTypes: typeof objectExtensionsHoopsImporterFileTypes;
declare const index_d$4_objectExtensionsImages: typeof objectExtensionsImages;
declare const index_d$4_objectExtensionsImportableObjects: typeof objectExtensionsImportableObjects;
declare const index_d$4_objectExtensionsLightingFileTypes: typeof objectExtensionsLightingFileTypes;
declare const index_d$4_objectExtensionsOpaqueTextures: typeof objectExtensionsOpaqueTextures;
declare const index_d$4_objectExtensionsPageContent: typeof objectExtensionsPageContent;
declare const index_d$4_objectExtensionsProcessedObjects: typeof objectExtensionsProcessedObjects;
declare const index_d$4_objectExtensionsProcessedVideoContent: typeof objectExtensionsProcessedVideoContent;
declare const index_d$4_objectExtensionsScriptTypes: typeof objectExtensionsScriptTypes;
declare const index_d$4_objectExtensionsSimLabImporterFileTypes: typeof objectExtensionsSimLabImporterFileTypes;
declare const index_d$4_objectExtensionsText: typeof objectExtensionsText;
declare const index_d$4_objectExtensionsTextures: typeof objectExtensionsTextures;
declare const index_d$4_objectExtensionsTransparentTextures: typeof objectExtensionsTransparentTextures;
declare const index_d$4_objectGetMembership: typeof objectGetMembership;
declare const index_d$4_objectGetRoomUsage: typeof objectGetRoomUsage;
declare const index_d$4_objectMemberUpdate: typeof objectMemberUpdate;
declare const index_d$4_objectUpdate: typeof objectUpdate;
declare const index_d$4_objectUpload: typeof objectUpload;
declare const index_d$4_objectUploadFile: typeof objectUploadFile;
declare const index_d$4_objectsGet: typeof objectsGet;
declare const index_d$4_objectsGetAll: typeof objectsGetAll;
declare const index_d$4_objectsGetAllForCustomer: typeof objectsGetAllForCustomer;
declare const index_d$4_paginationAsQuery: typeof paginationAsQuery;
declare const index_d$4_profileGet: typeof profileGet;
declare const index_d$4_profileOtherGet: typeof profileOtherGet;
declare const index_d$4_profilePatch: typeof profilePatch;
declare const index_d$4_roomClone: typeof roomClone;
declare const index_d$4_roomCreate: typeof roomCreate;
declare const index_d$4_roomCreateJoinCode: typeof roomCreateJoinCode;
declare const index_d$4_roomDelete: typeof roomDelete;
declare const index_d$4_roomDeleteJoinCode: typeof roomDeleteJoinCode;
declare const index_d$4_roomGet: typeof roomGet;
declare const index_d$4_roomGetForCustomer: typeof roomGetForCustomer;
declare const index_d$4_roomGetJoinCode: typeof roomGetJoinCode;
declare const index_d$4_roomGetJournalInfo: typeof roomGetJournalInfo;
declare const index_d$4_roomGetMyMembershipInfo: typeof roomGetMyMembershipInfo;
declare const index_d$4_roomGetObjectsInUse: typeof roomGetObjectsInUse;
declare const index_d$4_roomGetParticipating: typeof roomGetParticipating;
declare const index_d$4_roomGetTransientJournalInfo: typeof roomGetTransientJournalInfo;
declare const index_d$4_roomHide: typeof roomHide;
declare const index_d$4_roomInviteNew: typeof roomInviteNew;
declare const index_d$4_roomLeave: typeof roomLeave;
declare const index_d$4_roomMemberDelete: typeof roomMemberDelete;
declare const index_d$4_roomMemberUpdate: typeof roomMemberUpdate;
declare const index_d$4_roomMessage: typeof roomMessage;
declare const index_d$4_roomTemplatesGet: typeof roomTemplatesGet;
declare const index_d$4_roomTemplatize: typeof roomTemplatize;
declare const index_d$4_roomUnhide: typeof roomUnhide;
declare const index_d$4_roomUpdate: typeof roomUpdate;
declare const index_d$4_roomUpdateMembershipMetadata: typeof roomUpdateMembershipMetadata;
declare const index_d$4_settingsCustomerGet: typeof settingsCustomerGet;
declare const index_d$4_settingsDomainGet: typeof settingsDomainGet;
declare const index_d$4_settingsSystemGet: typeof settingsSystemGet;
declare const index_d$4_streamClientCreateSession: typeof streamClientCreateSession;
declare const index_d$4_streamClientPingSession: typeof streamClientPingSession;
declare const index_d$4_streamClientResumeSession: typeof streamClientResumeSession;
declare const index_d$4_userDelete: typeof userDelete;
declare const index_d$4_userForgotPassword: typeof userForgotPassword;
declare const index_d$4_userPictureUpdate: typeof userPictureUpdate;
declare const index_d$4_usersCreate: typeof usersCreate;
declare const index_d$4_usersGet: typeof usersGet;
declare const index_d$4_usersUpdate: typeof usersUpdate;
declare namespace index_d$4 {
  export {
    index_d$4_CavrnusApi as CavrnusApi,
    index_d$4_CavrnusApiAuthorized as CavrnusApiAuthorized,
    index_d$4_CavrnusApiUser as CavrnusApiUser,
    index_d$4_CommonSystemSettings as CommonSystemSettings,
    index_d$4_CreateStreamClientSessionRequest as CreateStreamClientSessionRequest,
    index_d$4_CreateStreamClientSessionResponse as CreateStreamClientSessionResponse,
    index_d$4_CustomerADConfig as CustomerADConfig,
    index_d$4_CustomerDomainSettings as CustomerDomainSettings,
    index_d$4_CustomerFeature as CustomerFeature,
    index_d$4_CustomerGuestAccessConfig as CustomerGuestAccessConfig,
    index_d$4_CustomerInvite as CustomerInvite,
    index_d$4_CustomerMFAConfig as CustomerMFAConfig,
    index_d$4_CustomerPictureUploadRequest as CustomerPictureUploadRequest,
    index_d$4_CustomerProfile as CustomerProfile,
    index_d$4_CustomerSaml2Config as CustomerSaml2Config,
    index_d$4_CustomerSettings as CustomerSettings,
    index_d$4_CustomerSettingsThemeColors as CustomerSettingsThemeColors,
    index_d$4_CustomerSettingsThemeConfig as CustomerSettingsThemeConfig,
    index_d$4_CustomerSettingsThemeImages as CustomerSettingsThemeImages,
    index_d$4_CustomerSettingsUrlsConfig as CustomerSettingsUrlsConfig,
    index_d$4_CustomerStatus as CustomerStatus,
    index_d$4_CustomerSubscription as CustomerSubscription,
    index_d$4_CustomerUpdate as CustomerUpdate,
    index_d$4_CustomerWhiteLabelSourcePackage as CustomerWhiteLabelSourcePackage,
    index_d$4_EncryptedContentSource as EncryptedContentSource,
    index_d$4_HealthServiceStatus as HealthServiceStatus,
    index_d$4_HealthStatus as HealthStatus,
    index_d$4_HealthStatusService as HealthStatusService,
    HoloObjectMetadata$1 as HoloObjectMetadata,
    index_d$4_IdResult as IdResult,
    index_d$4_ImportContent as ImportContent,
    index_d$4_JoinCode as JoinCode,
    index_d$4_LoginRequest as LoginRequest,
    index_d$4_LoginType as LoginType,
    index_d$4_MfaMethod as MfaMethod,
    index_d$4_ObjectAssetCategoryEnum as ObjectAssetCategoryEnum,
    index_d$4_ObjectAssetCategoryType as ObjectAssetCategoryType,
    ObjectAssetData$1 as ObjectAssetData,
    index_d$4_ObjectCategory as ObjectCategory,
    index_d$4_ObjectContent as ObjectContent,
    ObjectData$1 as ObjectData,
    index_d$4_ObjectInRoomsResponse as ObjectInRoomsResponse,
    index_d$4_ObjectInstantiateRequest as ObjectInstantiateRequest,
    ObjectMember$1 as ObjectMember,
    ObjectMemberAccess$1 as ObjectMemberAccess,
    ObjectMemberEntityType$1 as ObjectMemberEntityType,
    index_d$4_ObjectMemberUserCategoryQuickAccess as ObjectMemberUserCategoryQuickAccess,
    index_d$4_ObjectMemberUserCategoryQuickAccessValue as ObjectMemberUserCategoryQuickAccessValue,
    index_d$4_ObjectMemberUserSetArchived as ObjectMemberUserSetArchived,
    index_d$4_ObjectMemberUserSetNonbrowsable as ObjectMemberUserSetNonbrowsable,
    index_d$4_ObjectMemberUserSetNonbrowsableValue as ObjectMemberUserSetNonbrowsableValue,
    index_d$4_ObjectMemberUsetSetArchivedValue as ObjectMemberUsetSetArchivedValue,
    index_d$4_ObjectUpdateAdmin as ObjectUpdateAdmin,
    index_d$4_ObjectUsage as ObjectUsage,
    index_d$4_ObjectsListRequest as ObjectsListRequest,
    index_d$4_PaginatedRequest as PaginatedRequest,
    index_d$4_PaginatedResult as PaginatedResult,
    index_d$4_PingStreamClientSessionRequest as PingStreamClientSessionRequest,
    index_d$4_PingStreamClientSessionResponse as PingStreamClientSessionResponse,
    index_d$4_ResumeStreamClientSessionRequest as ResumeStreamClientSessionRequest,
    index_d$4_ResumeStreamClientSessionResponse as ResumeStreamClientSessionResponse,
    index_d$4_Room as Room,
    index_d$4_RoomCloneRequest as RoomCloneRequest,
    index_d$4_RoomCommon as RoomCommon,
    index_d$4_RoomCreateJoinCodeRequest as RoomCreateJoinCodeRequest,
    index_d$4_RoomCreation as RoomCreation,
    index_d$4_RoomIdResult as RoomIdResult,
    index_d$4_RoomInvitationRequest as RoomInvitationRequest,
    index_d$4_RoomInvitationResponse as RoomInvitationResponse,
    index_d$4_RoomJournalInfo as RoomJournalInfo,
    index_d$4_RoomMember as RoomMember,
    index_d$4_RoomMemberMetadataPatch as RoomMemberMetadataPatch,
    index_d$4_RoomObjectsResponse as RoomObjectsResponse,
    index_d$4_RoomTemplatizeRequest as RoomTemplatizeRequest,
    index_d$4_RoomUpdate as RoomUpdate,
    index_d$4_RoomUpdateMembershipMetadata as RoomUpdateMembershipMetadata,
    ScriptObjectMetadata$1 as ScriptObjectMetadata,
    index_d$4_ServerSettings as ServerSettings,
    index_d$4_StreamClientSession as StreamClientSession,
    index_d$4_StreamClientSessionResponse as StreamClientSessionResponse,
    index_d$4_StreamClientSessionStatus as StreamClientSessionStatus,
    index_d$4_SystemSettings as SystemSettings,
    index_d$4_UpdateObjectMemberRequest as UpdateObjectMemberRequest,
    index_d$4_UploadObjectFileRequest as UploadObjectFileRequest,
    index_d$4_UploadObjectRequest as UploadObjectRequest,
    index_d$4_UploadWhitelabelPackageRequest as UploadWhitelabelPackageRequest,
    UserAvatarData$1 as UserAvatarData,
    UserAvatarSelectionData$1 as UserAvatarSelectionData,
    index_d$4_UserCreationRequest as UserCreationRequest,
    index_d$4_UserForgotPasswordRequest as UserForgotPasswordRequest,
    index_d$4_UserListRequest as UserListRequest,
    index_d$4_UserMetadata as UserMetadata,
    index_d$4_UserPictureUploadRequest as UserPictureUploadRequest,
    index_d$4_UserProfile as UserProfile,
    index_d$4_UserProfilePatch as UserProfilePatch,
    index_d$4_UserStatus as UserStatus,
    index_d$4_UserType as UserType,
    index_d$4_UserUpdateRequest as UserUpdateRequest,
    index_d$4_contentDecryptor as contentDecryptor,
    index_d$4_customerDeletePicture as customerDeletePicture,
    index_d$4_customerInviteUsers as customerInviteUsers,
    index_d$4_customerInvitesGet as customerInvitesGet,
    index_d$4_customerRemoveInvite as customerRemoveInvite,
    index_d$4_customerSelfGet as customerSelfGet,
    index_d$4_customerSettingsGet as customerSettingsGet,
    index_d$4_customerSettingsSelfGet as customerSettingsSelfGet,
    index_d$4_customerSettingsSet as customerSettingsSet,
    index_d$4_customerSubscriptionGet as customerSubscriptionGet,
    index_d$4_customerUpdate as customerUpdate,
    index_d$4_customerUpdatePicture as customerUpdatePicture,
    index_d$4_customerUpdateWatermark as customerUpdateWatermark,
    index_d$4_customerWhitelabelPackageUpload as customerWhitelabelPackageUpload,
    index_d$4_emptyCustomerData as emptyCustomerData,
    index_d$4_healthStatusGet as healthStatusGet,
    index_d$4_journalEntryResolveRaw as journalEntryResolveRaw,
    index_d$4_journalGet as journalGet,
    index_d$4_journalPostOp as journalPostOp,
    index_d$4_journalPostOpRemoveOp as journalPostOpRemoveOp,
    index_d$4_journalResolveRaw as journalResolveRaw,
    index_d$4_loginTestToken as loginTestToken,
    index_d$4_loginUser as loginUser,
    index_d$4_objectCategoryFromExtension as objectCategoryFromExtension,
    index_d$4_objectCreateInstantiation as objectCreateInstantiation,
    index_d$4_objectDelete as objectDelete,
    index_d$4_objectDownloadAssetDecrypted as objectDownloadAssetDecrypted,
    index_d$4_objectExtensionsAnnoRecordFiles as objectExtensionsAnnoRecordFiles,
    index_d$4_objectExtensionsEnvironmentContent as objectExtensionsEnvironmentContent,
    index_d$4_objectExtensionsHoopsImporterFileTypes as objectExtensionsHoopsImporterFileTypes,
    index_d$4_objectExtensionsImages as objectExtensionsImages,
    index_d$4_objectExtensionsImportableObjects as objectExtensionsImportableObjects,
    index_d$4_objectExtensionsLightingFileTypes as objectExtensionsLightingFileTypes,
    index_d$4_objectExtensionsOpaqueTextures as objectExtensionsOpaqueTextures,
    index_d$4_objectExtensionsPageContent as objectExtensionsPageContent,
    index_d$4_objectExtensionsProcessedObjects as objectExtensionsProcessedObjects,
    index_d$4_objectExtensionsProcessedVideoContent as objectExtensionsProcessedVideoContent,
    index_d$4_objectExtensionsScriptTypes as objectExtensionsScriptTypes,
    index_d$4_objectExtensionsSimLabImporterFileTypes as objectExtensionsSimLabImporterFileTypes,
    index_d$4_objectExtensionsText as objectExtensionsText,
    index_d$4_objectExtensionsTextures as objectExtensionsTextures,
    index_d$4_objectExtensionsTransparentTextures as objectExtensionsTransparentTextures,
    index_d$4_objectGetMembership as objectGetMembership,
    index_d$4_objectGetRoomUsage as objectGetRoomUsage,
    index_d$4_objectMemberUpdate as objectMemberUpdate,
    index_d$4_objectUpdate as objectUpdate,
    index_d$4_objectUpload as objectUpload,
    index_d$4_objectUploadFile as objectUploadFile,
    index_d$4_objectsGet as objectsGet,
    index_d$4_objectsGetAll as objectsGetAll,
    index_d$4_objectsGetAllForCustomer as objectsGetAllForCustomer,
    index_d$4_paginationAsQuery as paginationAsQuery,
    index_d$4_profileGet as profileGet,
    index_d$4_profileOtherGet as profileOtherGet,
    index_d$4_profilePatch as profilePatch,
    index_d$4_roomClone as roomClone,
    index_d$4_roomCreate as roomCreate,
    index_d$4_roomCreateJoinCode as roomCreateJoinCode,
    index_d$4_roomDelete as roomDelete,
    index_d$4_roomDeleteJoinCode as roomDeleteJoinCode,
    index_d$4_roomGet as roomGet,
    index_d$4_roomGetForCustomer as roomGetForCustomer,
    index_d$4_roomGetJoinCode as roomGetJoinCode,
    index_d$4_roomGetJournalInfo as roomGetJournalInfo,
    index_d$4_roomGetMyMembershipInfo as roomGetMyMembershipInfo,
    index_d$4_roomGetObjectsInUse as roomGetObjectsInUse,
    index_d$4_roomGetParticipating as roomGetParticipating,
    index_d$4_roomGetTransientJournalInfo as roomGetTransientJournalInfo,
    index_d$4_roomHide as roomHide,
    index_d$4_roomInviteNew as roomInviteNew,
    index_d$4_roomLeave as roomLeave,
    index_d$4_roomMemberDelete as roomMemberDelete,
    index_d$4_roomMemberUpdate as roomMemberUpdate,
    index_d$4_roomMessage as roomMessage,
    index_d$4_roomTemplatesGet as roomTemplatesGet,
    index_d$4_roomTemplatize as roomTemplatize,
    index_d$4_roomUnhide as roomUnhide,
    index_d$4_roomUpdate as roomUpdate,
    index_d$4_roomUpdateMembershipMetadata as roomUpdateMembershipMetadata,
    index_d$4_settingsCustomerGet as settingsCustomerGet,
    index_d$4_settingsDomainGet as settingsDomainGet,
    index_d$4_settingsSystemGet as settingsSystemGet,
    index_d$4_streamClientCreateSession as streamClientCreateSession,
    index_d$4_streamClientPingSession as streamClientPingSession,
    index_d$4_streamClientResumeSession as streamClientResumeSession,
    index_d$4_userDelete as userDelete,
    index_d$4_userForgotPassword as userForgotPassword,
    index_d$4_userPictureUpdate as userPictureUpdate,
    index_d$4_usersCreate as usersCreate,
    index_d$4_usersGet as usersGet,
    index_d$4_usersUpdate as usersUpdate,
  };
}

declare const protobufPackage$5 = "ServerData";
declare enum ObjectUsageEnum {
    Object = 0,
    Environment = 1,
    AvatarBody = 2,
    AvatarHands = 3,
    Lighting = 4,
    ArTracker = 5,
    ImageTag = 6,
    Texture = 7,
    NormalMap = 8,
    UNRECOGNIZED = -1
}
declare function objectUsageEnumFromJSON(object: any): ObjectUsageEnum;
declare function objectUsageEnumToJSON(object: ObjectUsageEnum): string;
declare enum ObjectCategoryEnum {
    Unknown = 0,
    Holo = 1,
    Image = 2,
    HoloEnv = 3,
    LightingContent = 4,
    Pdf = 5,
    Video = 6,
    HoloRec = 7,
    ObjectOriginal = 8,
    Undetermined = 9,
    Script = 10,
    Material = 11,
    UNRECOGNIZED = -1
}
declare function objectCategoryEnumFromJSON(object: any): ObjectCategoryEnum;
declare function objectCategoryEnumToJSON(object: ObjectCategoryEnum): string;
declare enum ObjectMemberEntityType {
    User = 0,
    Customer = 1,
    System = 2,
    UNRECOGNIZED = -1
}
declare function objectMemberEntityTypeFromJSON(object: any): ObjectMemberEntityType;
declare function objectMemberEntityTypeToJSON(object: ObjectMemberEntityType): string;
declare enum ObjectMemberAccess {
    Owner = 0,
    Viewer = 1,
    None = 2,
    UNRECOGNIZED = -1
}
declare function objectMemberAccessFromJSON(object: any): ObjectMemberAccess;
declare function objectMemberAccessToJSON(object: ObjectMemberAccess): string;
declare enum ClientDeviceTypeEnum {
    phone = 0,
    tablet = 1,
    desktop = 2,
    quest = 3,
    focus = 4,
    neo = 5,
    magicLeap = 6,
    holoLens = 7,
    UNRECOGNIZED = -1
}
declare function clientDeviceTypeEnumFromJSON(object: any): ClientDeviceTypeEnum;
declare function clientDeviceTypeEnumToJSON(object: ClientDeviceTypeEnum): string;
declare enum ClientDeviceOSEnum {
    windows = 0,
    mac = 1,
    linux = 2,
    ios = 3,
    android = 4,
    UNRECOGNIZED = -1
}
declare function clientDeviceOSEnumFromJSON(object: any): ClientDeviceOSEnum;
declare function clientDeviceOSEnumToJSON(object: ClientDeviceOSEnum): string;
declare enum ClientAppEnum {
    native = 0,
    web = 1,
    UNRECOGNIZED = -1
}
declare function clientAppEnumFromJSON(object: any): ClientAppEnum;
declare function clientAppEnumToJSON(object: ClientAppEnum): string;
declare enum ClientModeEnum {
    direct = 0,
    stream = 1,
    UNRECOGNIZED = -1
}
declare function clientModeEnumFromJSON(object: any): ClientModeEnum;
declare function clientModeEnumToJSON(object: ClientModeEnum): string;
declare enum RoomMetadata_RoomAccess {
    MembersOnly = 0,
    LinkAllowOnly = 1,
    LinkAllowAndAdd = 2,
    None = 3,
    UNRECOGNIZED = -1
}
declare function roomMetadata_RoomAccessFromJSON(object: any): RoomMetadata_RoomAccess;
declare function roomMetadata_RoomAccessToJSON(object: RoomMetadata_RoomAccess): string;
declare enum RoomMemberMetadata_JoinStatus {
    Registered = 0,
    NotRegistered = 1,
    Joined = 2,
    UNRECOGNIZED = -1
}
declare function roomMemberMetadata_JoinStatusFromJSON(object: any): RoomMemberMetadata_JoinStatus;
declare function roomMemberMetadata_JoinStatusToJSON(object: RoomMemberMetadata_JoinStatus): string;
declare enum RoomMemberMetadata_MemberType {
    Owner = 0,
    Collaborator = 1,
    Viewer = 2,
    Listener = 3,
    UNRECOGNIZED = -1
}
declare function roomMemberMetadata_MemberTypeFromJSON(object: any): RoomMemberMetadata_MemberType;
declare function roomMemberMetadata_MemberTypeToJSON(object: RoomMemberMetadata_MemberType): string;
declare enum UserAvatarSelectionData_SelectionSourceEnum {
    Content = 0,
    ReadyPlayerMe = 1,
    UNRECOGNIZED = -1
}
declare function userAvatarSelectionData_SelectionSourceEnumFromJSON(object: any): UserAvatarSelectionData_SelectionSourceEnum;
declare function userAvatarSelectionData_SelectionSourceEnumToJSON(object: UserAvatarSelectionData_SelectionSourceEnum): string;
declare enum ClientStatus_ClientStatusCategory {
    Connected = 0,
    Idle = 1,
    DoNotDisturb = 2,
    UNRECOGNIZED = -1
}
declare function clientStatus_ClientStatusCategoryFromJSON(object: any): ClientStatus_ClientStatusCategory;
declare function clientStatus_ClientStatusCategoryToJSON(object: ClientStatus_ClientStatusCategory): string;
declare enum ClientStatus_ConnectionApplication {
    Unknown = 0,
    Unity = 1,
    WebClient = 2,
    Hub = 3,
    InternalTester = 4,
    DataAggregator = 5,
    ApiPipeline = 6,
    UNRECOGNIZED = -1
}
declare function clientStatus_ConnectionApplicationFromJSON(object: any): ClientStatus_ConnectionApplication;
declare function clientStatus_ConnectionApplicationToJSON(object: ClientStatus_ConnectionApplication): string;
declare enum ClientStatus_DeviceMode {
    Unset = 0,
    DesktopInteractive = 1,
    VR = 2,
    AR = 3,
    ConferenceOnly = 4,
    ChatOnly = 5,
    UNRECOGNIZED = -1
}
declare function clientStatus_DeviceModeFromJSON(object: any): ClientStatus_DeviceMode;
declare function clientStatus_DeviceModeToJSON(object: ClientStatus_DeviceMode): string;
declare enum UserConnectionStatus_UserConnectionStatusCategory {
    NotConnected = 0,
    Connected = 1,
    UNRECOGNIZED = -1
}
declare function userConnectionStatus_UserConnectionStatusCategoryFromJSON(object: any): UserConnectionStatus_UserConnectionStatusCategory;
declare function userConnectionStatus_UserConnectionStatusCategoryToJSON(object: UserConnectionStatus_UserConnectionStatusCategory): string;
declare enum ObjectAssetData_ObjectAssetCategoryEnum {
    Canonical = 0,
    LOD = 1,
    Uncategorized = 2,
    UNRECOGNIZED = -1
}
declare function objectAssetData_ObjectAssetCategoryEnumFromJSON(object: any): ObjectAssetData_ObjectAssetCategoryEnum;
declare function objectAssetData_ObjectAssetCategoryEnumToJSON(object: ObjectAssetData_ObjectAssetCategoryEnum): string;
interface ServerMetadata {
    importerVersion?: string | undefined;
    importerUrl?: string | undefined;
    importerSecondaryVersion?: string | undefined;
    importerSecondaryUrl?: string | undefined;
    applicationVersion?: string | undefined;
    applicationUrl?: string | undefined;
    applicationVersionAndroid?: string | undefined;
    applicationUrlAndroid?: string | undefined;
    applicationVersionOculusQuest?: string | undefined;
    applicationUrlOculusQuest?: string | undefined;
    applicationVersionMacOS?: string | undefined;
    applicationUrlMacOS?: string | undefined;
    applicationVersionIOS?: string | undefined;
    applicationUrlIOS?: string | undefined;
    applicationVersionMagicLeap?: string | undefined;
    applicationUrlMagicLeap?: string | undefined;
    applicationVersionPico?: string | undefined;
    applicationUrlPico?: string | undefined;
    applicationVersionFocus?: string | undefined;
    applicationUrlFocus?: string | undefined;
    userMessage?: string | undefined;
    updateMessage?: string | undefined;
    region?: string | undefined;
    defaultRoomTemplates: string[];
    minimumRequiredClientVersion?: string | undefined;
}
declare const ServerMetadata: {
    encode(message: ServerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerMetadata;
    fromJSON(object: any): ServerMetadata;
    toJSON(message: ServerMetadata): unknown;
    fromPartial(object: DeepPartial$8<ServerMetadata>): ServerMetadata;
};
interface RoomMetadata {
    v1?: RoomMetadata_V1 | undefined;
}
declare const RoomMetadata: {
    encode(message: RoomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomMetadata;
    fromJSON(object: any): RoomMetadata;
    toJSON(message: RoomMetadata): unknown;
    fromPartial(object: DeepPartial$8<RoomMetadata>): RoomMetadata;
};
interface RoomMetadata_V1 {
    id: string;
    name: string;
    createdAt?: Date;
    modifiedAt?: Date | undefined;
    ownerId?: string | undefined;
    description?: string | undefined;
    roomAccess: RoomMetadata_RoomAccess;
    roomUserCategory?: string | undefined;
    roomUserSort: number;
    thumbnailUrl?: string | undefined;
    watermarkEnabled?: boolean | undefined;
    members?: RoomMemberMetadata[];
}
declare const RoomMetadata_V1: {
    encode(message: RoomMetadata_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomMetadata_V1;
    fromJSON(object: any): RoomMetadata_V1;
    toJSON(message: RoomMetadata_V1): unknown;
    fromPartial(object: DeepPartial$8<RoomMetadata_V1>): RoomMetadata_V1;
};
interface RoomMemberMetadata {
    id: string;
    /** redundant? */
    email: string;
    joinStatus: RoomMemberMetadata_JoinStatus;
    inviteDate?: Date | undefined;
    lastAccess?: Date | undefined;
    userCategory?: string | undefined;
    userSort: number;
    /** 'archive'd. */
    hidden: boolean;
}
declare const RoomMemberMetadata: {
    encode(message: RoomMemberMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomMemberMetadata;
    fromJSON(object: any): RoomMemberMetadata;
    toJSON(message: RoomMemberMetadata): unknown;
    fromPartial(object: DeepPartial$8<RoomMemberMetadata>): RoomMemberMetadata;
};
interface UserAvatarSelectionData {
    selectedType: UserAvatarSelectionData_SelectionSourceEnum;
    cavrnusContentId: string;
    readyPlayerMeId: string;
}
declare const UserAvatarSelectionData: {
    encode(message: UserAvatarSelectionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserAvatarSelectionData;
    fromJSON(object: any): UserAvatarSelectionData;
    toJSON(message: UserAvatarSelectionData): unknown;
    fromPartial(object: DeepPartial$8<UserAvatarSelectionData>): UserAvatarSelectionData;
};
interface UserAvatarData {
    primaryColor?: Color4;
    secondaryColor?: Color4;
    avatarBody?: string | undefined;
    avatarBodyV2?: UserAvatarSelectionData | undefined;
    avatarHands?: string | undefined;
    showHandsLocal: boolean;
    showHandsRemote: boolean;
    handsScale: number;
    bodyScale: number;
}
declare const UserAvatarData: {
    encode(message: UserAvatarData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserAvatarData;
    fromJSON(object: any): UserAvatarData;
    toJSON(message: UserAvatarData): unknown;
    fromPartial(object: DeepPartial$8<UserAvatarData>): UserAvatarData;
};
interface CustomerWhitelabelTheme {
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    accentColor?: string | undefined;
    faviconUrl?: string | undefined;
    iconUrl?: string | undefined;
    logoUrl?: string | undefined;
}
declare const CustomerWhitelabelTheme: {
    encode(message: CustomerWhitelabelTheme, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerWhitelabelTheme;
    fromJSON(object: any): CustomerWhitelabelTheme;
    toJSON(message: CustomerWhitelabelTheme): unknown;
    fromPartial(object: DeepPartial$8<CustomerWhitelabelTheme>): CustomerWhitelabelTheme;
};
interface CustomerWhitelabelUrls {
    contactUrl?: string | undefined;
    homeUrl?: string | undefined;
    privacyUrl?: string | undefined;
    touUrl?: string | undefined;
    replyToEmail?: string | undefined;
    supportEmail?: string | undefined;
}
declare const CustomerWhitelabelUrls: {
    encode(message: CustomerWhitelabelUrls, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerWhitelabelUrls;
    fromJSON(object: any): CustomerWhitelabelUrls;
    toJSON(message: CustomerWhitelabelUrls): unknown;
    fromPartial(object: DeepPartial$8<CustomerWhitelabelUrls>): CustomerWhitelabelUrls;
};
interface CustomerWhitelabelInfo {
    displayName?: string | undefined;
    whitelabelTheme?: CustomerWhitelabelTheme | undefined;
    whitelabelUrls?: CustomerWhitelabelUrls | undefined;
}
declare const CustomerWhitelabelInfo: {
    encode(message: CustomerWhitelabelInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerWhitelabelInfo;
    fromJSON(object: any): CustomerWhitelabelInfo;
    toJSON(message: CustomerWhitelabelInfo): unknown;
    fromPartial(object: DeepPartial$8<CustomerWhitelabelInfo>): CustomerWhitelabelInfo;
};
interface CustomerProfileInfo {
    name: string;
    customerId: string;
    domain: string;
    allowedLoginMethods: string[];
    allowedFeatures: string[];
    defaultRoomTemplates: string[];
    id: string;
    pictureUrl?: string | undefined;
    watermarkUrl?: string | undefined;
    watermarkEnabled?: boolean | undefined;
    whitelabel?: CustomerWhitelabelInfo | undefined;
    readyPlayerMeEnabled?: boolean | undefined;
}
declare const CustomerProfileInfo: {
    encode(message: CustomerProfileInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerProfileInfo;
    fromJSON(object: any): CustomerProfileInfo;
    toJSON(message: CustomerProfileInfo): unknown;
    fromPartial(object: DeepPartial$8<CustomerProfileInfo>): CustomerProfileInfo;
};
interface UserProfileInfo {
    id: string;
    email: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    screenName?: string | undefined;
    pictureUrl?: string | undefined;
    userLocation?: string | undefined;
    avatarData?: UserAvatarData;
    isGuest: boolean;
    isCustomerAdmin: boolean;
    defaultRoomTemplates: string[];
}
declare const UserProfileInfo: {
    encode(message: UserProfileInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserProfileInfo;
    fromJSON(object: any): UserProfileInfo;
    toJSON(message: UserProfileInfo): unknown;
    fromPartial(object: DeepPartial$8<UserProfileInfo>): UserProfileInfo;
};
interface ClientStatus {
    statusCategory: ClientStatus_ClientStatusCategory;
    application: ClientStatus_ConnectionApplication;
    operatingSystem?: string | undefined;
    unityDeviceCategory?: string | undefined;
    deviceMode: ClientStatus_DeviceMode;
}
declare const ClientStatus: {
    encode(message: ClientStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientStatus;
    fromJSON(object: any): ClientStatus;
    toJSON(message: ClientStatus): unknown;
    fromPartial(object: DeepPartial$8<ClientStatus>): ClientStatus;
};
interface UserConnectionStatus {
    statusInfo?: ClientStatus;
    connectionCategory: UserConnectionStatus_UserConnectionStatusCategory;
    connectionId: string;
    userId: string;
    sessionId: string;
    startTime?: Date | undefined;
    lastChangeTime?: Date | undefined;
}
declare const UserConnectionStatus: {
    encode(message: UserConnectionStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserConnectionStatus;
    fromJSON(object: any): UserConnectionStatus;
    toJSON(message: UserConnectionStatus): unknown;
    fromPartial(object: DeepPartial$8<UserConnectionStatus>): UserConnectionStatus;
};
interface MetadataEntry {
    key: string;
    val: string;
}
declare const MetadataEntry: {
    encode(message: MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MetadataEntry;
    fromJSON(object: any): MetadataEntry;
    toJSON(message: MetadataEntry): unknown;
    fromPartial(object: DeepPartial$8<MetadataEntry>): MetadataEntry;
};
interface HoloObjectMetadata {
    bounds?: AxisAlignedBoundingBox;
    holoVersion?: string | undefined;
    metadata?: MetadataEntry[];
}
declare const HoloObjectMetadata: {
    encode(message: HoloObjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HoloObjectMetadata;
    fromJSON(object: any): HoloObjectMetadata;
    toJSON(message: HoloObjectMetadata): unknown;
    fromPartial(object: DeepPartial$8<HoloObjectMetadata>): HoloObjectMetadata;
};
interface ScriptObjectMetadata {
    moduleName: string;
    moduleVersion: string;
    metadata?: MetadataEntry[];
}
declare const ScriptObjectMetadata: {
    encode(message: ScriptObjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScriptObjectMetadata;
    fromJSON(object: any): ScriptObjectMetadata;
    toJSON(message: ScriptObjectMetadata): unknown;
    fromPartial(object: DeepPartial$8<ScriptObjectMetadata>): ScriptObjectMetadata;
};
interface ObjectContentData {
    url: string;
    length: string;
    md5Hash?: string | undefined;
    geometryCost: number;
    textureCost: number;
}
declare const ObjectContentData: {
    encode(message: ObjectContentData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectContentData;
    fromJSON(object: any): ObjectContentData;
    toJSON(message: ObjectContentData): unknown;
    fromPartial(object: DeepPartial$8<ObjectContentData>): ObjectContentData;
};
interface ObjectAssetData {
    url: string;
    length: string;
    md5Hash?: string | undefined;
    assetCategory: ObjectAssetData_ObjectAssetCategoryEnum;
}
declare const ObjectAssetData: {
    encode(message: ObjectAssetData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectAssetData;
    fromJSON(object: any): ObjectAssetData;
    toJSON(message: ObjectAssetData): unknown;
    fromPartial(object: DeepPartial$8<ObjectAssetData>): ObjectAssetData;
};
interface ObjectImportContentData {
    uploadContentUrl: string;
    uploadContentLength: string;
    uploadContentMd5Hash: string;
    primaryFile: string;
    importWorkId?: string | undefined;
    lastProgress: number;
    lastProgressMessage?: string | undefined;
}
declare const ObjectImportContentData: {
    encode(message: ObjectImportContentData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectImportContentData;
    fromJSON(object: any): ObjectImportContentData;
    toJSON(message: ObjectImportContentData): unknown;
    fromPartial(object: DeepPartial$8<ObjectImportContentData>): ObjectImportContentData;
};
interface ObjectMember {
    entityId?: string | undefined;
    entityType: ObjectMemberEntityType;
    access: ObjectMemberAccess;
    lastUsage?: Date | undefined;
    userSet?: string | undefined;
    userCategory?: string | undefined;
    userSort?: number | undefined;
    quickaccess: boolean;
}
declare const ObjectMember: {
    encode(message: ObjectMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectMember;
    fromJSON(object: any): ObjectMember;
    toJSON(message: ObjectMember): unknown;
    fromPartial(object: DeepPartial$8<ObjectMember>): ObjectMember;
};
interface ObjectData {
    v1?: ObjectData_V1 | undefined;
}
declare const ObjectData: {
    encode(message: ObjectData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectData;
    fromJSON(object: any): ObjectData;
    toJSON(message: ObjectData): unknown;
    fromPartial(object: DeepPartial$8<ObjectData>): ObjectData;
};
interface ObjectData_V1 {
    id: string;
    customerId?: string | undefined;
    category: ObjectCategoryEnum;
    usage: ObjectUsageEnum;
    filename: string;
    name?: string | undefined;
    creationTime?: Date;
    sourceMd5Hash: string;
    algorithm: string;
    password: string;
    creatorId?: string | undefined;
    instanceOfObject?: string | undefined;
    thumbnail?: ObjectContentData;
    importSource?: ObjectImportContentData;
    assets?: ObjectAssetData[];
    holoMetadata?: HoloObjectMetadata;
    scriptMetadata?: ScriptObjectMetadata;
    metadata?: MetadataEntry[];
    members?: ObjectMember[];
}
declare const ObjectData_V1: {
    encode(message: ObjectData_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectData_V1;
    fromJSON(object: any): ObjectData_V1;
    toJSON(message: ObjectData_V1): unknown;
    fromPartial(object: DeepPartial$8<ObjectData_V1>): ObjectData_V1;
};
interface ClientDeviceInfo {
    os?: ClientDeviceOSEnum | undefined;
    device?: ClientDeviceTypeEnum | undefined;
    app?: ClientAppEnum | undefined;
    mode?: ClientModeEnum | undefined;
}
declare const ClientDeviceInfo: {
    encode(message: ClientDeviceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientDeviceInfo;
    fromJSON(object: any): ClientDeviceInfo;
    toJSON(message: ClientDeviceInfo): unknown;
    fromPartial(object: DeepPartial$8<ClientDeviceInfo>): ClientDeviceInfo;
};
declare type Builtin$8 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$8<T> = T extends Builtin$8 ? T : T extends Array<infer U> ? Array<DeepPartial$8<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$8<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$8<T[K]>;
} : Partial<T>;

type serverdata_d_ClientAppEnum = ClientAppEnum;
declare const serverdata_d_ClientAppEnum: typeof ClientAppEnum;
declare const serverdata_d_ClientDeviceInfo: typeof ClientDeviceInfo;
type serverdata_d_ClientDeviceOSEnum = ClientDeviceOSEnum;
declare const serverdata_d_ClientDeviceOSEnum: typeof ClientDeviceOSEnum;
type serverdata_d_ClientDeviceTypeEnum = ClientDeviceTypeEnum;
declare const serverdata_d_ClientDeviceTypeEnum: typeof ClientDeviceTypeEnum;
type serverdata_d_ClientModeEnum = ClientModeEnum;
declare const serverdata_d_ClientModeEnum: typeof ClientModeEnum;
declare const serverdata_d_ClientStatus: typeof ClientStatus;
type serverdata_d_ClientStatus_ClientStatusCategory = ClientStatus_ClientStatusCategory;
declare const serverdata_d_ClientStatus_ClientStatusCategory: typeof ClientStatus_ClientStatusCategory;
type serverdata_d_ClientStatus_ConnectionApplication = ClientStatus_ConnectionApplication;
declare const serverdata_d_ClientStatus_ConnectionApplication: typeof ClientStatus_ConnectionApplication;
type serverdata_d_ClientStatus_DeviceMode = ClientStatus_DeviceMode;
declare const serverdata_d_ClientStatus_DeviceMode: typeof ClientStatus_DeviceMode;
declare const serverdata_d_CustomerProfileInfo: typeof CustomerProfileInfo;
declare const serverdata_d_CustomerWhitelabelInfo: typeof CustomerWhitelabelInfo;
declare const serverdata_d_CustomerWhitelabelTheme: typeof CustomerWhitelabelTheme;
declare const serverdata_d_CustomerWhitelabelUrls: typeof CustomerWhitelabelUrls;
declare const serverdata_d_HoloObjectMetadata: typeof HoloObjectMetadata;
declare const serverdata_d_MetadataEntry: typeof MetadataEntry;
declare const serverdata_d_ObjectAssetData: typeof ObjectAssetData;
type serverdata_d_ObjectAssetData_ObjectAssetCategoryEnum = ObjectAssetData_ObjectAssetCategoryEnum;
declare const serverdata_d_ObjectAssetData_ObjectAssetCategoryEnum: typeof ObjectAssetData_ObjectAssetCategoryEnum;
type serverdata_d_ObjectCategoryEnum = ObjectCategoryEnum;
declare const serverdata_d_ObjectCategoryEnum: typeof ObjectCategoryEnum;
declare const serverdata_d_ObjectContentData: typeof ObjectContentData;
declare const serverdata_d_ObjectData: typeof ObjectData;
declare const serverdata_d_ObjectData_V1: typeof ObjectData_V1;
declare const serverdata_d_ObjectImportContentData: typeof ObjectImportContentData;
declare const serverdata_d_ObjectMember: typeof ObjectMember;
type serverdata_d_ObjectMemberAccess = ObjectMemberAccess;
declare const serverdata_d_ObjectMemberAccess: typeof ObjectMemberAccess;
type serverdata_d_ObjectMemberEntityType = ObjectMemberEntityType;
declare const serverdata_d_ObjectMemberEntityType: typeof ObjectMemberEntityType;
type serverdata_d_ObjectUsageEnum = ObjectUsageEnum;
declare const serverdata_d_ObjectUsageEnum: typeof ObjectUsageEnum;
declare const serverdata_d_RoomMemberMetadata: typeof RoomMemberMetadata;
type serverdata_d_RoomMemberMetadata_JoinStatus = RoomMemberMetadata_JoinStatus;
declare const serverdata_d_RoomMemberMetadata_JoinStatus: typeof RoomMemberMetadata_JoinStatus;
type serverdata_d_RoomMemberMetadata_MemberType = RoomMemberMetadata_MemberType;
declare const serverdata_d_RoomMemberMetadata_MemberType: typeof RoomMemberMetadata_MemberType;
declare const serverdata_d_RoomMetadata: typeof RoomMetadata;
type serverdata_d_RoomMetadata_RoomAccess = RoomMetadata_RoomAccess;
declare const serverdata_d_RoomMetadata_RoomAccess: typeof RoomMetadata_RoomAccess;
declare const serverdata_d_RoomMetadata_V1: typeof RoomMetadata_V1;
declare const serverdata_d_ScriptObjectMetadata: typeof ScriptObjectMetadata;
declare const serverdata_d_ServerMetadata: typeof ServerMetadata;
declare const serverdata_d_UserAvatarData: typeof UserAvatarData;
declare const serverdata_d_UserAvatarSelectionData: typeof UserAvatarSelectionData;
type serverdata_d_UserAvatarSelectionData_SelectionSourceEnum = UserAvatarSelectionData_SelectionSourceEnum;
declare const serverdata_d_UserAvatarSelectionData_SelectionSourceEnum: typeof UserAvatarSelectionData_SelectionSourceEnum;
declare const serverdata_d_UserConnectionStatus: typeof UserConnectionStatus;
type serverdata_d_UserConnectionStatus_UserConnectionStatusCategory = UserConnectionStatus_UserConnectionStatusCategory;
declare const serverdata_d_UserConnectionStatus_UserConnectionStatusCategory: typeof UserConnectionStatus_UserConnectionStatusCategory;
declare const serverdata_d_UserProfileInfo: typeof UserProfileInfo;
declare const serverdata_d_clientAppEnumFromJSON: typeof clientAppEnumFromJSON;
declare const serverdata_d_clientAppEnumToJSON: typeof clientAppEnumToJSON;
declare const serverdata_d_clientDeviceOSEnumFromJSON: typeof clientDeviceOSEnumFromJSON;
declare const serverdata_d_clientDeviceOSEnumToJSON: typeof clientDeviceOSEnumToJSON;
declare const serverdata_d_clientDeviceTypeEnumFromJSON: typeof clientDeviceTypeEnumFromJSON;
declare const serverdata_d_clientDeviceTypeEnumToJSON: typeof clientDeviceTypeEnumToJSON;
declare const serverdata_d_clientModeEnumFromJSON: typeof clientModeEnumFromJSON;
declare const serverdata_d_clientModeEnumToJSON: typeof clientModeEnumToJSON;
declare const serverdata_d_clientStatus_ClientStatusCategoryFromJSON: typeof clientStatus_ClientStatusCategoryFromJSON;
declare const serverdata_d_clientStatus_ClientStatusCategoryToJSON: typeof clientStatus_ClientStatusCategoryToJSON;
declare const serverdata_d_clientStatus_ConnectionApplicationFromJSON: typeof clientStatus_ConnectionApplicationFromJSON;
declare const serverdata_d_clientStatus_ConnectionApplicationToJSON: typeof clientStatus_ConnectionApplicationToJSON;
declare const serverdata_d_clientStatus_DeviceModeFromJSON: typeof clientStatus_DeviceModeFromJSON;
declare const serverdata_d_clientStatus_DeviceModeToJSON: typeof clientStatus_DeviceModeToJSON;
declare const serverdata_d_objectAssetData_ObjectAssetCategoryEnumFromJSON: typeof objectAssetData_ObjectAssetCategoryEnumFromJSON;
declare const serverdata_d_objectAssetData_ObjectAssetCategoryEnumToJSON: typeof objectAssetData_ObjectAssetCategoryEnumToJSON;
declare const serverdata_d_objectCategoryEnumFromJSON: typeof objectCategoryEnumFromJSON;
declare const serverdata_d_objectCategoryEnumToJSON: typeof objectCategoryEnumToJSON;
declare const serverdata_d_objectMemberAccessFromJSON: typeof objectMemberAccessFromJSON;
declare const serverdata_d_objectMemberAccessToJSON: typeof objectMemberAccessToJSON;
declare const serverdata_d_objectMemberEntityTypeFromJSON: typeof objectMemberEntityTypeFromJSON;
declare const serverdata_d_objectMemberEntityTypeToJSON: typeof objectMemberEntityTypeToJSON;
declare const serverdata_d_objectUsageEnumFromJSON: typeof objectUsageEnumFromJSON;
declare const serverdata_d_objectUsageEnumToJSON: typeof objectUsageEnumToJSON;
declare const serverdata_d_roomMemberMetadata_JoinStatusFromJSON: typeof roomMemberMetadata_JoinStatusFromJSON;
declare const serverdata_d_roomMemberMetadata_JoinStatusToJSON: typeof roomMemberMetadata_JoinStatusToJSON;
declare const serverdata_d_roomMemberMetadata_MemberTypeFromJSON: typeof roomMemberMetadata_MemberTypeFromJSON;
declare const serverdata_d_roomMemberMetadata_MemberTypeToJSON: typeof roomMemberMetadata_MemberTypeToJSON;
declare const serverdata_d_roomMetadata_RoomAccessFromJSON: typeof roomMetadata_RoomAccessFromJSON;
declare const serverdata_d_roomMetadata_RoomAccessToJSON: typeof roomMetadata_RoomAccessToJSON;
declare const serverdata_d_userAvatarSelectionData_SelectionSourceEnumFromJSON: typeof userAvatarSelectionData_SelectionSourceEnumFromJSON;
declare const serverdata_d_userAvatarSelectionData_SelectionSourceEnumToJSON: typeof userAvatarSelectionData_SelectionSourceEnumToJSON;
declare const serverdata_d_userConnectionStatus_UserConnectionStatusCategoryFromJSON: typeof userConnectionStatus_UserConnectionStatusCategoryFromJSON;
declare const serverdata_d_userConnectionStatus_UserConnectionStatusCategoryToJSON: typeof userConnectionStatus_UserConnectionStatusCategoryToJSON;
declare namespace serverdata_d {
  export {
    serverdata_d_ClientAppEnum as ClientAppEnum,
    serverdata_d_ClientDeviceInfo as ClientDeviceInfo,
    serverdata_d_ClientDeviceOSEnum as ClientDeviceOSEnum,
    serverdata_d_ClientDeviceTypeEnum as ClientDeviceTypeEnum,
    serverdata_d_ClientModeEnum as ClientModeEnum,
    serverdata_d_ClientStatus as ClientStatus,
    serverdata_d_ClientStatus_ClientStatusCategory as ClientStatus_ClientStatusCategory,
    serverdata_d_ClientStatus_ConnectionApplication as ClientStatus_ConnectionApplication,
    serverdata_d_ClientStatus_DeviceMode as ClientStatus_DeviceMode,
    serverdata_d_CustomerProfileInfo as CustomerProfileInfo,
    serverdata_d_CustomerWhitelabelInfo as CustomerWhitelabelInfo,
    serverdata_d_CustomerWhitelabelTheme as CustomerWhitelabelTheme,
    serverdata_d_CustomerWhitelabelUrls as CustomerWhitelabelUrls,
    DeepPartial$8 as DeepPartial,
    serverdata_d_HoloObjectMetadata as HoloObjectMetadata,
    serverdata_d_MetadataEntry as MetadataEntry,
    serverdata_d_ObjectAssetData as ObjectAssetData,
    serverdata_d_ObjectAssetData_ObjectAssetCategoryEnum as ObjectAssetData_ObjectAssetCategoryEnum,
    serverdata_d_ObjectCategoryEnum as ObjectCategoryEnum,
    serverdata_d_ObjectContentData as ObjectContentData,
    serverdata_d_ObjectData as ObjectData,
    serverdata_d_ObjectData_V1 as ObjectData_V1,
    serverdata_d_ObjectImportContentData as ObjectImportContentData,
    serverdata_d_ObjectMember as ObjectMember,
    serverdata_d_ObjectMemberAccess as ObjectMemberAccess,
    serverdata_d_ObjectMemberEntityType as ObjectMemberEntityType,
    serverdata_d_ObjectUsageEnum as ObjectUsageEnum,
    serverdata_d_RoomMemberMetadata as RoomMemberMetadata,
    serverdata_d_RoomMemberMetadata_JoinStatus as RoomMemberMetadata_JoinStatus,
    serverdata_d_RoomMemberMetadata_MemberType as RoomMemberMetadata_MemberType,
    serverdata_d_RoomMetadata as RoomMetadata,
    serverdata_d_RoomMetadata_RoomAccess as RoomMetadata_RoomAccess,
    serverdata_d_RoomMetadata_V1 as RoomMetadata_V1,
    serverdata_d_ScriptObjectMetadata as ScriptObjectMetadata,
    serverdata_d_ServerMetadata as ServerMetadata,
    serverdata_d_UserAvatarData as UserAvatarData,
    serverdata_d_UserAvatarSelectionData as UserAvatarSelectionData,
    serverdata_d_UserAvatarSelectionData_SelectionSourceEnum as UserAvatarSelectionData_SelectionSourceEnum,
    serverdata_d_UserConnectionStatus as UserConnectionStatus,
    serverdata_d_UserConnectionStatus_UserConnectionStatusCategory as UserConnectionStatus_UserConnectionStatusCategory,
    serverdata_d_UserProfileInfo as UserProfileInfo,
    serverdata_d_clientAppEnumFromJSON as clientAppEnumFromJSON,
    serverdata_d_clientAppEnumToJSON as clientAppEnumToJSON,
    serverdata_d_clientDeviceOSEnumFromJSON as clientDeviceOSEnumFromJSON,
    serverdata_d_clientDeviceOSEnumToJSON as clientDeviceOSEnumToJSON,
    serverdata_d_clientDeviceTypeEnumFromJSON as clientDeviceTypeEnumFromJSON,
    serverdata_d_clientDeviceTypeEnumToJSON as clientDeviceTypeEnumToJSON,
    serverdata_d_clientModeEnumFromJSON as clientModeEnumFromJSON,
    serverdata_d_clientModeEnumToJSON as clientModeEnumToJSON,
    serverdata_d_clientStatus_ClientStatusCategoryFromJSON as clientStatus_ClientStatusCategoryFromJSON,
    serverdata_d_clientStatus_ClientStatusCategoryToJSON as clientStatus_ClientStatusCategoryToJSON,
    serverdata_d_clientStatus_ConnectionApplicationFromJSON as clientStatus_ConnectionApplicationFromJSON,
    serverdata_d_clientStatus_ConnectionApplicationToJSON as clientStatus_ConnectionApplicationToJSON,
    serverdata_d_clientStatus_DeviceModeFromJSON as clientStatus_DeviceModeFromJSON,
    serverdata_d_clientStatus_DeviceModeToJSON as clientStatus_DeviceModeToJSON,
    serverdata_d_objectAssetData_ObjectAssetCategoryEnumFromJSON as objectAssetData_ObjectAssetCategoryEnumFromJSON,
    serverdata_d_objectAssetData_ObjectAssetCategoryEnumToJSON as objectAssetData_ObjectAssetCategoryEnumToJSON,
    serverdata_d_objectCategoryEnumFromJSON as objectCategoryEnumFromJSON,
    serverdata_d_objectCategoryEnumToJSON as objectCategoryEnumToJSON,
    serverdata_d_objectMemberAccessFromJSON as objectMemberAccessFromJSON,
    serverdata_d_objectMemberAccessToJSON as objectMemberAccessToJSON,
    serverdata_d_objectMemberEntityTypeFromJSON as objectMemberEntityTypeFromJSON,
    serverdata_d_objectMemberEntityTypeToJSON as objectMemberEntityTypeToJSON,
    serverdata_d_objectUsageEnumFromJSON as objectUsageEnumFromJSON,
    serverdata_d_objectUsageEnumToJSON as objectUsageEnumToJSON,
    protobufPackage$5 as protobufPackage,
    serverdata_d_roomMemberMetadata_JoinStatusFromJSON as roomMemberMetadata_JoinStatusFromJSON,
    serverdata_d_roomMemberMetadata_JoinStatusToJSON as roomMemberMetadata_JoinStatusToJSON,
    serverdata_d_roomMemberMetadata_MemberTypeFromJSON as roomMemberMetadata_MemberTypeFromJSON,
    serverdata_d_roomMemberMetadata_MemberTypeToJSON as roomMemberMetadata_MemberTypeToJSON,
    serverdata_d_roomMetadata_RoomAccessFromJSON as roomMetadata_RoomAccessFromJSON,
    serverdata_d_roomMetadata_RoomAccessToJSON as roomMetadata_RoomAccessToJSON,
    serverdata_d_userAvatarSelectionData_SelectionSourceEnumFromJSON as userAvatarSelectionData_SelectionSourceEnumFromJSON,
    serverdata_d_userAvatarSelectionData_SelectionSourceEnumToJSON as userAvatarSelectionData_SelectionSourceEnumToJSON,
    serverdata_d_userConnectionStatus_UserConnectionStatusCategoryFromJSON as userConnectionStatus_UserConnectionStatusCategoryFromJSON,
    serverdata_d_userConnectionStatus_UserConnectionStatusCategoryToJSON as userConnectionStatus_UserConnectionStatusCategoryToJSON,
  };
}

declare const protobufPackage$4 = "Session";
/**
 * ServerSupportedProtobufVersionCompatability is sent down as part of initial communications and describes the versions of each individual message the server will be sending.
 * This is used to determine communication compatability.
 */
interface ServerSupportedProtobufVersionCompatability {
    v1?: ServerSupportedProtobufVersionCompatability_V1 | undefined;
}
declare const ServerSupportedProtobufVersionCompatability: {
    encode(message: ServerSupportedProtobufVersionCompatability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerSupportedProtobufVersionCompatability;
    fromJSON(object: any): ServerSupportedProtobufVersionCompatability;
    toJSON(message: ServerSupportedProtobufVersionCompatability): unknown;
    fromPartial(object: DeepPartial$7<ServerSupportedProtobufVersionCompatability>): ServerSupportedProtobufVersionCompatability;
};
interface ServerSupportedProtobufVersionCompatability_V1 {
    journal: number;
    userInfo: number;
    rtcAuth: number;
    updateUserProfileInfo: number;
    ping: number;
    serverMessage: number;
    requestTranslate: number;
    upstreamDownstreamSelection: number;
}
declare const ServerSupportedProtobufVersionCompatability_V1: {
    encode(message: ServerSupportedProtobufVersionCompatability_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerSupportedProtobufVersionCompatability_V1;
    fromJSON(object: any): ServerSupportedProtobufVersionCompatability_V1;
    toJSON(message: ServerSupportedProtobufVersionCompatability_V1): unknown;
    fromPartial(object: DeepPartial$7<ServerSupportedProtobufVersionCompatability_V1>): ServerSupportedProtobufVersionCompatability_V1;
};
/** ConnInit is the first message sent by the client to the server. It contains protocol compatability information. */
interface ConnInit {
    v1?: ConnInit_V1 | undefined;
}
declare const ConnInit: {
    encode(message: ConnInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnInit;
    fromJSON(object: any): ConnInit;
    toJSON(message: ConnInit): unknown;
    fromPartial(object: DeepPartial$7<ConnInit>): ConnInit;
};
interface ConnInit_V1 {
    downStreamVersionCapability?: ConnInit_V1_DownStreamProtobufVersionCompatability;
    clientDeviceInfo?: ClientDeviceInfo;
}
declare const ConnInit_V1: {
    encode(message: ConnInit_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnInit_V1;
    fromJSON(object: any): ConnInit_V1;
    toJSON(message: ConnInit_V1): unknown;
    fromPartial(object: DeepPartial$7<ConnInit_V1>): ConnInit_V1;
};
interface ConnInit_V1_DownStreamProtobufVersionCompatability {
    journal: number;
    userInfo: number;
    rtcAuth: number;
    /** 1 = use commdownstream version, 2 = use transient event version */
    userEnter: number;
    /** 1 = use commdownstream version, 2 = use transient event version */
    userExit: number;
    updateUserProfileInfo: number;
    ping: number;
    serverMessage: number;
    upstreamDownstreamSelection: number;
}
declare const ConnInit_V1_DownStreamProtobufVersionCompatability: {
    encode(message: ConnInit_V1_DownStreamProtobufVersionCompatability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnInit_V1_DownStreamProtobufVersionCompatability;
    fromJSON(object: any): ConnInit_V1_DownStreamProtobufVersionCompatability;
    toJSON(message: ConnInit_V1_DownStreamProtobufVersionCompatability): unknown;
    fromPartial(object: DeepPartial$7<ConnInit_V1_DownStreamProtobufVersionCompatability>): ConnInit_V1_DownStreamProtobufVersionCompatability;
};
/** UserInfo is sent down by the server after receiving ConnInit, and contains the connection identifier, user identifier, initial user profile information. */
interface UserInfo {
    v1?: UserInfo_V1 | undefined;
}
declare const UserInfo: {
    encode(message: UserInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserInfo;
    fromJSON(object: any): UserInfo;
    toJSON(message: UserInfo): unknown;
    fromPartial(object: DeepPartial$7<UserInfo>): UserInfo;
};
interface UserInfo_V1 {
    userId: string;
    connectionId: string;
    permission: string;
    userProfile?: UserProfileInfo;
}
declare const UserInfo_V1: {
    encode(message: UserInfo_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserInfo_V1;
    fromJSON(object: any): UserInfo_V1;
    toJSON(message: UserInfo_V1): unknown;
    fromPartial(object: DeepPartial$7<UserInfo_V1>): UserInfo_V1;
};
/**
 * RequestRtcAuthorization is sent by a user requesting information needed to join the RTC Voice/Video system. It is often made during initial connections, but
 * may need to be repeated after reconnections or other failures.
 */
interface RequestRtcAuthorization {
    v1?: RequestRtcAuthorization_V1 | undefined;
    v2?: RequestRtcAuthorization_V2 | undefined;
}
declare const RequestRtcAuthorization: {
    encode(message: RequestRtcAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestRtcAuthorization;
    fromJSON(object: any): RequestRtcAuthorization;
    toJSON(message: RequestRtcAuthorization): unknown;
    fromPartial(object: DeepPartial$7<RequestRtcAuthorization>): RequestRtcAuthorization;
};
interface RequestRtcAuthorization_V1 {
    deviceType: string;
    requestId: string;
}
declare const RequestRtcAuthorization_V1: {
    encode(message: RequestRtcAuthorization_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestRtcAuthorization_V1;
    fromJSON(object: any): RequestRtcAuthorization_V1;
    toJSON(message: RequestRtcAuthorization_V1): unknown;
    fromPartial(object: DeepPartial$7<RequestRtcAuthorization_V1>): RequestRtcAuthorization_V1;
};
interface RequestRtcAuthorization_V2 {
    deviceType: string;
    requestId: string;
    clientId: string;
}
declare const RequestRtcAuthorization_V2: {
    encode(message: RequestRtcAuthorization_V2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestRtcAuthorization_V2;
    fromJSON(object: any): RequestRtcAuthorization_V2;
    toJSON(message: RequestRtcAuthorization_V2): unknown;
    fromPartial(object: DeepPartial$7<RequestRtcAuthorization_V2>): RequestRtcAuthorization_V2;
};
/** RtcAuthorization is the reply to RequestRtcAuthorization, and contains informatino needed to join the RTC session. */
interface RtcAuthorization {
    v2?: RtcAuthorization_V2 | undefined;
}
declare const RtcAuthorization: {
    encode(message: RtcAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RtcAuthorization;
    fromJSON(object: any): RtcAuthorization;
    toJSON(message: RtcAuthorization): unknown;
    fromPartial(object: DeepPartial$7<RtcAuthorization>): RtcAuthorization;
};
interface RtcAuthorization_V2 {
    rtcEndPoint?: string | undefined;
    rtcAuthToken?: string | undefined;
    requestId?: string | undefined;
    clientId?: string | undefined;
    rtcApplicationName?: string | undefined;
}
declare const RtcAuthorization_V2: {
    encode(message: RtcAuthorization_V2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RtcAuthorization_V2;
    fromJSON(object: any): RtcAuthorization_V2;
    toJSON(message: RtcAuthorization_V2): unknown;
    fromPartial(object: DeepPartial$7<RtcAuthorization_V2>): RtcAuthorization_V2;
};
/** UserEnter is received by the clients when a user joins the space. */
interface UserEnter {
    v1?: UserEnter_V1 | undefined;
}
declare const UserEnter: {
    encode(message: UserEnter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserEnter;
    fromJSON(object: any): UserEnter;
    toJSON(message: UserEnter): unknown;
    fromPartial(object: DeepPartial$7<UserEnter>): UserEnter;
};
interface UserEnter_V1 {
    userId: string;
    connectionId: string;
    userProfileInfo?: UserProfileInfo;
}
declare const UserEnter_V1: {
    encode(message: UserEnter_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserEnter_V1;
    fromJSON(object: any): UserEnter_V1;
    toJSON(message: UserEnter_V1): unknown;
    fromPartial(object: DeepPartial$7<UserEnter_V1>): UserEnter_V1;
};
/** UserExit is received by clients when a user leaves the space. */
interface UserExit {
    v1?: UserExit_V1 | undefined;
}
declare const UserExit: {
    encode(message: UserExit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserExit;
    fromJSON(object: any): UserExit;
    toJSON(message: UserExit): unknown;
    fromPartial(object: DeepPartial$7<UserExit>): UserExit;
};
interface UserExit_V1 {
    userId: string;
    connectionId: string;
}
declare const UserExit_V1: {
    encode(message: UserExit_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserExit_V1;
    fromJSON(object: any): UserExit_V1;
    toJSON(message: UserExit_V1): unknown;
    fromPartial(object: DeepPartial$7<UserExit_V1>): UserExit_V1;
};
/** WriteOperation is sent by clients to execute a journal operation. */
interface WriteOperation {
    v1?: WriteOperation_V1 | undefined;
}
declare const WriteOperation: {
    encode(message: WriteOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteOperation;
    fromJSON(object: any): WriteOperation;
    toJSON(message: WriteOperation): unknown;
    fromPartial(object: DeepPartial$7<WriteOperation>): WriteOperation;
};
interface WriteOperation_V1 {
    /** journal operation as a binary encoded Journal.Operation */
    rawJournalOperation: Uint8Array;
    /** if present, this operation implies the termination of a transient operation in progress, with this id. */
    consumedTransientUniqueId?: string | undefined;
}
declare const WriteOperation_V1: {
    encode(message: WriteOperation_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteOperation_V1;
    fromJSON(object: any): WriteOperation_V1;
    toJSON(message: WriteOperation_V1): unknown;
    fromPartial(object: DeepPartial$7<WriteOperation_V1>): WriteOperation_V1;
};
/** UpdateUserProfileInfo is received by clients when a connected user's profile information has been altered. */
interface UpdateUserProfileInfo {
    v1?: UpdateUserProfileInfo_V1 | undefined;
}
declare const UpdateUserProfileInfo: {
    encode(message: UpdateUserProfileInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserProfileInfo;
    fromJSON(object: any): UpdateUserProfileInfo;
    toJSON(message: UpdateUserProfileInfo): unknown;
    fromPartial(object: DeepPartial$7<UpdateUserProfileInfo>): UpdateUserProfileInfo;
};
interface UpdateUserProfileInfo_V1 {
    userProfileInfo?: UserProfileInfo;
}
declare const UpdateUserProfileInfo_V1: {
    encode(message: UpdateUserProfileInfo_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserProfileInfo_V1;
    fromJSON(object: any): UpdateUserProfileInfo_V1;
    toJSON(message: UpdateUserProfileInfo_V1): unknown;
    fromPartial(object: DeepPartial$7<UpdateUserProfileInfo_V1>): UpdateUserProfileInfo_V1;
};
/** ReceiveFullJournal is received by the client once upon join, and contains the entire room's journal, as well as some metadata about the space itself. */
interface ReceiveFullJournal {
    v1?: ReceiveFullJournal_V1 | undefined;
}
declare const ReceiveFullJournal: {
    encode(message: ReceiveFullJournal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReceiveFullJournal;
    fromJSON(object: any): ReceiveFullJournal;
    toJSON(message: ReceiveFullJournal): unknown;
    fromPartial(object: DeepPartial$7<ReceiveFullJournal>): ReceiveFullJournal;
};
interface ReceiveFullJournal_V1 {
    raw?: JournalRaw;
    sentTime?: Date;
    roomMetadata?: RoomMetadata;
    connectionState: string;
}
declare const ReceiveFullJournal_V1: {
    encode(message: ReceiveFullJournal_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReceiveFullJournal_V1;
    fromJSON(object: any): ReceiveFullJournal_V1;
    toJSON(message: ReceiveFullJournal_V1): unknown;
    fromPartial(object: DeepPartial$7<ReceiveFullJournal_V1>): ReceiveFullJournal_V1;
};
/** Sent by a client to request a text translation. The server will issue the provided operation, with translated text, when the result is available. */
interface RequestTranslation {
    v1?: RequestTranslation_V1 | undefined;
}
declare const RequestTranslation: {
    encode(message: RequestTranslation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestTranslation;
    fromJSON(object: any): RequestTranslation;
    toJSON(message: RequestTranslation): unknown;
    fromPartial(object: DeepPartial$7<RequestTranslation>): RequestTranslation;
};
interface RequestTranslation_V1 {
    text2dModificationOp?: OpText2dModify | undefined;
    text3dModificationOp?: OpText3dModify | undefined;
    propertyUpdateOp?: OpUpdatePropertyValue | undefined;
    originalText?: string | undefined;
    originalLanguage?: string | undefined;
    destinationLanguage?: string | undefined;
}
declare const RequestTranslation_V1: {
    encode(message: RequestTranslation_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestTranslation_V1;
    fromJSON(object: any): RequestTranslation_V1;
    toJSON(message: RequestTranslation_V1): unknown;
    fromPartial(object: DeepPartial$7<RequestTranslation_V1>): RequestTranslation_V1;
};
/** CommUpstream is the message sent from clients to the server, and contains all possible types communicated. */
interface CommUpstream$1 {
    writeOperation?: WriteOperation | undefined;
    /** Type of buffer is TransientJournal.TransientEvent */
    transientEventRaw?: Uint8Array | undefined;
    /** Type of buffer is TransientJournal.TransientEvent */
    transientEventToStoreRaw?: Uint8Array | undefined;
    /** Type of buffer is TransientJournal.TransientEvent */
    transientEventToReplyRaw?: Uint8Array | undefined;
    /** Type of buffer is TransientJournal.TransientEvent */
    transientEventToReplyAndStoreRaw?: Uint8Array | undefined;
    init?: ConnInit | undefined;
    rtcAuth?: RequestRtcAuthorization | undefined;
    ping?: Ping | undefined;
    requestTranslation?: RequestTranslation | undefined;
}
declare const CommUpstream$1: {
    encode(message: CommUpstream$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommUpstream$1;
    fromJSON(object: any): CommUpstream$1;
    toJSON(message: CommUpstream$1): unknown;
    fromPartial(object: DeepPartial$7<CommUpstream$1>): CommUpstream$1;
};
/** CommDownstream is the message sent from server to clients, and contains all possible types communicated. */
interface CommDownstream$1 {
    supportedVersionData?: ServerSupportedProtobufVersionCompatability | undefined;
    journal?: ReceiveFullJournal | undefined;
    /** DEPRECATE: to be replaced with transient ev equivalent */
    userEnter?: UserEnter | undefined;
    /** DEPRECATE: to be replaced with transient ev equivalent */
    userExit?: UserExit | undefined;
    userInfo?: UserInfo | undefined;
    /** Type of buffer is Journal.JournalEntryRaw */
    journalEntryRaw?: Uint8Array | undefined;
    /** Tyep of buffer is TransientJournal.TransientEntryRaw */
    transientEntryRaw?: Uint8Array | undefined;
    rtcAuth?: RtcAuthorization | undefined;
    updateUserProfileInfo?: UpdateUserProfileInfo | undefined;
    ping?: Ping | undefined;
    serverMessage?: GenericMessage | undefined;
}
declare const CommDownstream$1: {
    encode(message: CommDownstream$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommDownstream$1;
    fromJSON(object: any): CommDownstream$1;
    toJSON(message: CommDownstream$1): unknown;
    fromPartial(object: DeepPartial$7<CommDownstream$1>): CommDownstream$1;
};
declare type Builtin$7 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$7<T> = T extends Builtin$7 ? T : T extends Array<infer U> ? Array<DeepPartial$7<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$7<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$7<T[K]>;
} : Partial<T>;

declare const socketcomm_d_ConnInit: typeof ConnInit;
declare const socketcomm_d_ConnInit_V1: typeof ConnInit_V1;
declare const socketcomm_d_ConnInit_V1_DownStreamProtobufVersionCompatability: typeof ConnInit_V1_DownStreamProtobufVersionCompatability;
declare const socketcomm_d_ReceiveFullJournal: typeof ReceiveFullJournal;
declare const socketcomm_d_ReceiveFullJournal_V1: typeof ReceiveFullJournal_V1;
declare const socketcomm_d_RequestRtcAuthorization: typeof RequestRtcAuthorization;
declare const socketcomm_d_RequestRtcAuthorization_V1: typeof RequestRtcAuthorization_V1;
declare const socketcomm_d_RequestRtcAuthorization_V2: typeof RequestRtcAuthorization_V2;
declare const socketcomm_d_RequestTranslation: typeof RequestTranslation;
declare const socketcomm_d_RequestTranslation_V1: typeof RequestTranslation_V1;
declare const socketcomm_d_RtcAuthorization: typeof RtcAuthorization;
declare const socketcomm_d_RtcAuthorization_V2: typeof RtcAuthorization_V2;
declare const socketcomm_d_ServerSupportedProtobufVersionCompatability: typeof ServerSupportedProtobufVersionCompatability;
declare const socketcomm_d_ServerSupportedProtobufVersionCompatability_V1: typeof ServerSupportedProtobufVersionCompatability_V1;
declare const socketcomm_d_UpdateUserProfileInfo: typeof UpdateUserProfileInfo;
declare const socketcomm_d_UpdateUserProfileInfo_V1: typeof UpdateUserProfileInfo_V1;
declare const socketcomm_d_UserEnter: typeof UserEnter;
declare const socketcomm_d_UserEnter_V1: typeof UserEnter_V1;
declare const socketcomm_d_UserExit: typeof UserExit;
declare const socketcomm_d_UserExit_V1: typeof UserExit_V1;
declare const socketcomm_d_UserInfo: typeof UserInfo;
declare const socketcomm_d_UserInfo_V1: typeof UserInfo_V1;
declare const socketcomm_d_WriteOperation: typeof WriteOperation;
declare const socketcomm_d_WriteOperation_V1: typeof WriteOperation_V1;
declare namespace socketcomm_d {
  export {
    CommDownstream$1 as CommDownstream,
    CommUpstream$1 as CommUpstream,
    socketcomm_d_ConnInit as ConnInit,
    socketcomm_d_ConnInit_V1 as ConnInit_V1,
    socketcomm_d_ConnInit_V1_DownStreamProtobufVersionCompatability as ConnInit_V1_DownStreamProtobufVersionCompatability,
    DeepPartial$7 as DeepPartial,
    socketcomm_d_ReceiveFullJournal as ReceiveFullJournal,
    socketcomm_d_ReceiveFullJournal_V1 as ReceiveFullJournal_V1,
    socketcomm_d_RequestRtcAuthorization as RequestRtcAuthorization,
    socketcomm_d_RequestRtcAuthorization_V1 as RequestRtcAuthorization_V1,
    socketcomm_d_RequestRtcAuthorization_V2 as RequestRtcAuthorization_V2,
    socketcomm_d_RequestTranslation as RequestTranslation,
    socketcomm_d_RequestTranslation_V1 as RequestTranslation_V1,
    socketcomm_d_RtcAuthorization as RtcAuthorization,
    socketcomm_d_RtcAuthorization_V2 as RtcAuthorization_V2,
    socketcomm_d_ServerSupportedProtobufVersionCompatability as ServerSupportedProtobufVersionCompatability,
    socketcomm_d_ServerSupportedProtobufVersionCompatability_V1 as ServerSupportedProtobufVersionCompatability_V1,
    socketcomm_d_UpdateUserProfileInfo as UpdateUserProfileInfo,
    socketcomm_d_UpdateUserProfileInfo_V1 as UpdateUserProfileInfo_V1,
    socketcomm_d_UserEnter as UserEnter,
    socketcomm_d_UserEnter_V1 as UserEnter_V1,
    socketcomm_d_UserExit as UserExit,
    socketcomm_d_UserExit_V1 as UserExit_V1,
    socketcomm_d_UserInfo as UserInfo,
    socketcomm_d_UserInfo_V1 as UserInfo_V1,
    socketcomm_d_WriteOperation as WriteOperation,
    socketcomm_d_WriteOperation_V1 as WriteOperation_V1,
    protobufPackage$4 as protobufPackage,
  };
}

interface ProtobufType<Protobuf> {
    encode(msg: Protobuf, writer: Writer): Writer;
    decode(reader: Reader, length: number): Protobuf;
}
declare class ProtoWebsocket<TUp, TDown> {
    private socket?;
    private writer;
    private reader;
    private _onDisconnected;
    get onDisconnected(): ste_simple_events.ISimpleEvent<Error | undefined>;
    private _onRecvMsg;
    get onRecvMsg(): ste_simple_events.ISimpleEvent<TDown>;
    constructor(writer: (msg: TUp, writer: Writer) => Writer, reader: (reader: Reader, length?: number) => TDown);
    connect(api: CavrnusApiUser, urlPath: string): Promise<boolean>;
    disconnect(): void;
    private headersToQuery;
    private handle_connected;
    private handle_message;
    private handle_close;
    send(msg: TUp): void;
}

declare enum ConnectionStatus {
    Connecting = 0,
    Connected = 1,
    AwaitingReconnection = 2,
    Disconnected = 3
}

interface CountedBool {
    isset: ReadonlyValue<boolean>;
    set(): boolean;
    unset(): boolean;
    count(): number;
}
declare function countedBool(initial?: number): CountedBool;

interface Offable {
    off(): void;
}

/**
 * from https://romkevandermeulen.nl/2016/09/18/deferred-typescript.html
 * see https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md
 */
declare class Deferred<T> {
    promise: Promise<T>;
    private fate;
    private state;
    private _resolve;
    private _reject;
    constructor();
    resolve(value?: any): void;
    reject(reason?: any): void;
    isResolved(): boolean;
    isPending(): boolean;
    isFulfilled(): boolean;
    isRejected(): boolean;
}

interface Hook extends Offable {
}
declare class HookHandle implements Hook {
    remover?: (() => void);
    constructor(remover?: () => void);
    off(): void;
}
interface ChangeEvent<T> {
    new: T;
    old: T;
}
interface ReadonlyValue<T> {
    get(): T;
    on(func: (newval: ChangeEvent<T>) => void): Hook;
}
interface Value<T> extends ReadonlyValue<T> {
    set(t: T): void;
}
declare function of<T>(t: T): Value<T>;
declare function once<T>(val: ReadonlyValue<T>, func: (t: T) => void): void;
declare function bind<T>(t: ReadonlyValue<T>, func: (t: T) => void): Hook;
declare function bindDiff<T>(t: ReadonlyValue<T>, func: (old: T | undefined, val: T | undefined) => void): Hook;

declare type ValueKeys<T, K extends keyof T = keyof T> = K extends (T[K] extends ReadonlyValue<infer U> ? K : never) ? K : never;
declare type NonValueKeys<T, K extends keyof T = keyof T> = K extends (T[K] extends ReadonlyValue<infer U> ? never : K) ? K : never;
declare type ValueDerefs<T> = {
    [K in ValueKeys<T>]: T[K] extends ReadonlyValue<infer U> ? U : never;
};
declare type NonValues<T> = {
    [K in NonValueKeys<T>]: T[K];
};
declare type DeValued<T> = ValueDerefs<T> & NonValues<T>;
declare type Extracted<T> = T extends ReadonlyValue<infer U> ? U : never;
declare type AsReadonlyValues<T> = {
    readonly [K in ValueKeys<T>]: ReadonlyValue<Extracted<T[K]>>;
};
declare type AsReadonly<T> = AsReadonlyValues<T> | Readonly<NonValueKeys<T>>;
declare function deValue<T>(ob: T): DeValued<T>;
declare function reValue<T>(ob: T, assigns: Partial<DeValued<T>>): void;

declare function map<D, S>(src: ReadonlyValue<S>, mapFunc: (s: S) => D): ReadonlyValue<D>;

declare function map_w<D, S>(src: Value<S>, mapFunc: (s: S) => D, unmapFunc: (d: D) => S): Value<D>;

declare function mapasync<D, S>(src: ReadonlyValue<S>, mapFunc: (s: S) => Promise<D>, valWhenFails: D): ReadonlyValue<D>;

declare function ifund<T>(src: ReadonlyValue<T | undefined>, ifUndefined: T): ReadonlyValue<T>;

declare function valuewithinvalue<T, K extends ValueKeys<T>>(container: ReadonlyValue<T>, key: K): ReadonlyValue<ValueDerefs<T>[K]>;

declare function valuewithinvalueund<T, K extends ValueKeys<T>>(container: ReadonlyValue<T | undefined>, key: K): ReadonlyValue<ValueDerefs<T>[K] | undefined>;

declare function combining<D, S1, S2>(a: ReadonlyValue<S1>, b: ReadonlyValue<S2>, combiningFunc: (a: S1, b: S2) => D): ReadonlyValue<D>;
declare function combining3<D, S1, S2, S3>(a: ReadonlyValue<S1>, b: ReadonlyValue<S2>, c: ReadonlyValue<S3>, combiningFunc: (a: S1, b: S2, c: S3) => D): ReadonlyValue<D>;
declare function combining4<D, S1, S2, S3, S4>(a: ReadonlyValue<S1>, b: ReadonlyValue<S2>, c: ReadonlyValue<S3>, d: ReadonlyValue<S4>, combiningFunc: (a: S1, b: S2, c: S3, d: S4) => D): ReadonlyValue<D>;

interface ValueMapAddition<K, V> {
    key: K;
    val: V;
}
interface ValueMapRemoving<K, V> {
    key: K;
    val: V;
}
interface ValueMapChange<K, V> {
    key: K;
    old: V;
    new: V;
}
interface ReadonlyValueMap<K, V> extends ReadonlyMap<K, V> {
    onAdd(func: (t: ValueMapAddition<K, V>) => void): Hook;
    onRemoving(func: (t: ValueMapRemoving<K, V>) => void): Hook;
    onChanged(func: (t: ValueMapChange<K, V>) => void): Hook;
}
interface ValueMap<K, V> extends Map<K, V> {
    onAdd(func: (t: ValueMapAddition<K, V>) => void): Hook;
    onRemoving(func: (t: ValueMapRemoving<K, V>) => void): Hook;
    onChanged(func: (t: ValueMapChange<K, V>) => void): Hook;
}
declare class SimpleValueMap<K, V> implements ValueMap<K, V>, ReadonlyValueMap<K, V> {
    private _evAdd;
    private _evRemove;
    private _evChange;
    _defaultGenerator: ((k: K) => V) | undefined;
    private data;
    onAdd(func: (t: ValueMapAddition<K, V>) => void): Hook;
    onRemoving(func: (t: ValueMapRemoving<K, V>) => void): Hook;
    onChanged(func: (t: ValueMapChange<K, V>) => void): Hook;
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    get size(): number;
    [Symbol.iterator](): IterableIterator<[K, V]>;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    [Symbol.toStringTag]: string;
}
declare function valuemap<K, V>(): ValueMap<K, V>;
declare function valuemapWithGenerator<K, V>(defaultGenerator: (k: K) => V): ValueMap<K, V>;
declare function updateValueMapFromArray<K, V>(map: ValueMap<K, V>, src: {
    key: K;
    val: V;
}[] | undefined): void;

declare function mapintoarray<K, V>(src: ReadonlyValueMap<K, V>, dst: Array<V>, sortFn: (a: V, b: V) => number): Offable;

declare type HookGeneratorFunc$1<K, V> = (k: K, v: V, trigger: () => void) => Hook[];
declare function mapintoarraydynamic<K, V>(src: ReadonlyValueMap<K, V>, dst: Array<V>, sortFn: (a: V, b: V) => number, hookGenFn: HookGeneratorFunc$1<K, V>): Offable;

declare function valuewithin<K, V>(map: ValueMap<K, V>, key: K): Value<V | undefined>;
declare function valuewithinreadonly<K, V>(map: ReadonlyValueMap<K, V>, key: K): ReadonlyValue<V | undefined>;

declare function valuewithindynamic<K, V>(map: ValueMap<K, V>, key: ReadonlyValue<K>): Value<V | undefined>;

declare function mapaggregate<K, V, R>(map: ReadonlyValueMap<K, V>, func: (map: ReadonlyValueMap<K, V>) => R): ReadonlyValue<R>;
declare function mapcount<K, V>(map: ReadonlyValueMap<K, V>): ReadonlyValue<number>;

declare function mapmap<Ki, Vi, Ko, Vo>(src: ReadonlyValueMap<Ki, Vi>, map: (key: Ki, val: Vi) => ({
    key: Ko;
    val: Vo;
} | undefined)): {
    map: ReadonlyValueMap<Ko, Vo>;
    mapper: Offable;
};
declare function mapfilter<K, V>(src: ReadonlyValueMap<K, V>, filter: (key: K, val: V) => boolean): {
    map: ReadonlyValueMap<K, V>;
    mapper: Offable;
};

declare type HookGeneratorFunc<K, V> = (k: K, v: V, trigger: () => void) => Hook[];
declare function mapmapdynamic<Ki, Vi, Ko, Vo>(src: ReadonlyValueMap<Ki, Vi>, map: (key: Ki, val: Vi) => {
    key: Ko;
    val: Vo;
} | undefined, hookGenFn: HookGeneratorFunc<Ki, Vi>): {
    map: ReadonlyValueMap<Ko, Vo>;
    mapper: Offable;
};
declare function mapfilterdynamic<K, V>(src: ReadonlyValueMap<K, V>, filter: (key: K, val: V) => boolean, hookGenFn: HookGeneratorFunc<K, V>): {
    map: ReadonlyValueMap<K, V>;
    mapper: Offable;
};

type index_d$3_AsReadonly<T> = AsReadonly<T>;
type index_d$3_AsReadonlyValues<T> = AsReadonlyValues<T>;
type index_d$3_ChangeEvent<T> = ChangeEvent<T>;
type index_d$3_CountedBool = CountedBool;
type index_d$3_DeValued<T> = DeValued<T>;
type index_d$3_Deferred<T> = Deferred<T>;
declare const index_d$3_Deferred: typeof Deferred;
type index_d$3_Extracted<T> = Extracted<T>;
type index_d$3_Hook = Hook;
type index_d$3_HookHandle = HookHandle;
declare const index_d$3_HookHandle: typeof HookHandle;
type index_d$3_NonValueKeys<T, K extends keyof T = keyof T> = NonValueKeys<T, K>;
type index_d$3_NonValues<T> = NonValues<T>;
type index_d$3_Offable = Offable;
type index_d$3_ReadonlyValue<T> = ReadonlyValue<T>;
type index_d$3_ReadonlyValueMap<K, V> = ReadonlyValueMap<K, V>;
type index_d$3_SimpleValueMap<K, V> = SimpleValueMap<K, V>;
declare const index_d$3_SimpleValueMap: typeof SimpleValueMap;
type index_d$3_Value<T> = Value<T>;
type index_d$3_ValueDerefs<T> = ValueDerefs<T>;
type index_d$3_ValueKeys<T, K extends keyof T = keyof T> = ValueKeys<T, K>;
type index_d$3_ValueMap<K, V> = ValueMap<K, V>;
type index_d$3_ValueMapAddition<K, V> = ValueMapAddition<K, V>;
type index_d$3_ValueMapChange<K, V> = ValueMapChange<K, V>;
type index_d$3_ValueMapRemoving<K, V> = ValueMapRemoving<K, V>;
declare const index_d$3_bind: typeof bind;
declare const index_d$3_bindDiff: typeof bindDiff;
declare const index_d$3_combining: typeof combining;
declare const index_d$3_combining3: typeof combining3;
declare const index_d$3_combining4: typeof combining4;
declare const index_d$3_countedBool: typeof countedBool;
declare const index_d$3_deValue: typeof deValue;
declare const index_d$3_ifund: typeof ifund;
declare const index_d$3_map: typeof map;
declare const index_d$3_map_w: typeof map_w;
declare const index_d$3_mapaggregate: typeof mapaggregate;
declare const index_d$3_mapasync: typeof mapasync;
declare const index_d$3_mapcount: typeof mapcount;
declare const index_d$3_mapfilter: typeof mapfilter;
declare const index_d$3_mapfilterdynamic: typeof mapfilterdynamic;
declare const index_d$3_mapintoarray: typeof mapintoarray;
declare const index_d$3_mapintoarraydynamic: typeof mapintoarraydynamic;
declare const index_d$3_mapmap: typeof mapmap;
declare const index_d$3_mapmapdynamic: typeof mapmapdynamic;
declare const index_d$3_of: typeof of;
declare const index_d$3_once: typeof once;
declare const index_d$3_reValue: typeof reValue;
declare const index_d$3_updateValueMapFromArray: typeof updateValueMapFromArray;
declare const index_d$3_valuemap: typeof valuemap;
declare const index_d$3_valuemapWithGenerator: typeof valuemapWithGenerator;
declare const index_d$3_valuewithin: typeof valuewithin;
declare const index_d$3_valuewithindynamic: typeof valuewithindynamic;
declare const index_d$3_valuewithinreadonly: typeof valuewithinreadonly;
declare const index_d$3_valuewithinvalue: typeof valuewithinvalue;
declare const index_d$3_valuewithinvalueund: typeof valuewithinvalueund;
declare namespace index_d$3 {
  export {
    index_d$3_AsReadonly as AsReadonly,
    index_d$3_AsReadonlyValues as AsReadonlyValues,
    index_d$3_ChangeEvent as ChangeEvent,
    index_d$3_CountedBool as CountedBool,
    index_d$3_DeValued as DeValued,
    index_d$3_Deferred as Deferred,
    index_d$3_Extracted as Extracted,
    index_d$3_Hook as Hook,
    index_d$3_HookHandle as HookHandle,
    index_d$3_NonValueKeys as NonValueKeys,
    index_d$3_NonValues as NonValues,
    index_d$3_Offable as Offable,
    index_d$3_ReadonlyValue as ReadonlyValue,
    index_d$3_ReadonlyValueMap as ReadonlyValueMap,
    index_d$3_SimpleValueMap as SimpleValueMap,
    index_d$3_Value as Value,
    index_d$3_ValueDerefs as ValueDerefs,
    index_d$3_ValueKeys as ValueKeys,
    index_d$3_ValueMap as ValueMap,
    index_d$3_ValueMapAddition as ValueMapAddition,
    index_d$3_ValueMapChange as ValueMapChange,
    index_d$3_ValueMapRemoving as ValueMapRemoving,
    index_d$3_bind as bind,
    index_d$3_bindDiff as bindDiff,
    index_d$3_combining as combining,
    index_d$3_combining3 as combining3,
    index_d$3_combining4 as combining4,
    index_d$3_countedBool as countedBool,
    index_d$3_deValue as deValue,
    index_d$3_ifund as ifund,
    index_d$3_map as map,
    index_d$3_map_w as map_w,
    index_d$3_mapaggregate as mapaggregate,
    index_d$3_mapasync as mapasync,
    index_d$3_mapcount as mapcount,
    index_d$3_mapfilter as mapfilter,
    index_d$3_mapfilterdynamic as mapfilterdynamic,
    index_d$3_mapintoarray as mapintoarray,
    index_d$3_mapintoarraydynamic as mapintoarraydynamic,
    index_d$3_mapmap as mapmap,
    index_d$3_mapmapdynamic as mapmapdynamic,
    index_d$3_of as of,
    index_d$3_once as once,
    index_d$3_reValue as reValue,
    index_d$3_updateValueMapFromArray as updateValueMapFromArray,
    index_d$3_valuemap as valuemap,
    index_d$3_valuemapWithGenerator as valuemapWithGenerator,
    index_d$3_valuewithin as valuewithin,
    index_d$3_valuewithindynamic as valuewithindynamic,
    index_d$3_valuewithinreadonly as valuewithinreadonly,
    index_d$3_valuewithinvalue as valuewithinvalue,
    index_d$3_valuewithinvalueund as valuewithinvalueund,
  };
}

declare const protobufPackage$3 = "Transient";
/** A TransientEntryRaw is a TransientEntry, except that the Event 'ev' is a raw buffer instead of a resolved protobuf message. It must be resolved by parsing the binary 'ev' into a TransientEvent to be fully used. */
interface TransientEntryRaw {
    time?: Date;
    connectionId?: string | undefined;
    ev: Uint8Array;
    id?: string | undefined;
}
declare const TransientEntryRaw: {
    encode(message: TransientEntryRaw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransientEntryRaw;
    fromJSON(object: any): TransientEntryRaw;
    toJSON(message: TransientEntryRaw): unknown;
    fromPartial(object: DeepPartial$6<TransientEntryRaw>): TransientEntryRaw;
};
/** TransientJournalRaw is a sequence of TransientEntryRaw, and needs to be resolved into a TransientJournal to be interpreted. */
interface TransientJournalRaw {
    /** binary serialized Transient.TransientEntry sequence */
    rawEntries: Uint8Array[];
}
declare const TransientJournalRaw: {
    encode(message: TransientJournalRaw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransientJournalRaw;
    fromJSON(object: any): TransientJournalRaw;
    toJSON(message: TransientJournalRaw): unknown;
    fromPartial(object: DeepPartial$6<TransientJournalRaw>): TransientJournalRaw;
};
declare type Builtin$6 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$6<T> = T extends Builtin$6 ? T : T extends Array<infer U> ? Array<DeepPartial$6<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$6<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$6<T[K]>;
} : Partial<T>;

declare const protobufPackage$2 = "Transient";
declare enum EvRequestUserStream_V1_StreamRequestOption {
    SmartStream = 0,
    ApplicationStream = 1,
    VirtualCamera = 2,
    UNRECOGNIZED = -1
}
declare function evRequestUserStream_V1_StreamRequestOptionFromJSON(object: any): EvRequestUserStream_V1_StreamRequestOption;
declare function evRequestUserStream_V1_StreamRequestOptionToJSON(object: EvRequestUserStream_V1_StreamRequestOption): string;
declare enum EvUserStreamState_V1_StreamStateMode {
    Nothing = 0,
    UserCamera = 1,
    PresentToBoards = 2,
    UNRECOGNIZED = -1
}
declare function evUserStreamState_V1_StreamStateModeFromJSON(object: any): EvUserStreamState_V1_StreamStateMode;
declare function evUserStreamState_V1_StreamStateModeToJSON(object: EvUserStreamState_V1_StreamStateMode): string;
/** EvUserEntry is a TransientEvent fired when a user joins the space. */
interface EvUserEntry {
    v1?: EvUserEntry_V1 | undefined;
}
declare const EvUserEntry: {
    encode(message: EvUserEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserEntry;
    fromJSON(object: any): EvUserEntry;
    toJSON(message: EvUserEntry): unknown;
    fromPartial(object: DeepPartial$5<EvUserEntry>): EvUserEntry;
};
interface EvUserEntry_V1 {
    /** uniquely identifies a user. A user's id is permanent and does not change. */
    userId: string;
    profile?: UserProfileInfo;
}
declare const EvUserEntry_V1: {
    encode(message: EvUserEntry_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserEntry_V1;
    fromJSON(object: any): EvUserEntry_V1;
    toJSON(message: EvUserEntry_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserEntry_V1>): EvUserEntry_V1;
};
/** EvUserExit is a TransientEvent fired when a user leaves the space. */
interface EvUserExit {
    v1?: EvUserExit_V1 | undefined;
}
declare const EvUserExit: {
    encode(message: EvUserExit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserExit;
    fromJSON(object: any): EvUserExit;
    toJSON(message: EvUserExit): unknown;
    fromPartial(object: DeepPartial$5<EvUserExit>): EvUserExit;
};
interface EvUserExit_V1 {
    userId: string;
}
declare const EvUserExit_V1: {
    encode(message: EvUserExit_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserExit_V1;
    fromJSON(object: any): EvUserExit_V1;
    toJSON(message: EvUserExit_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserExit_V1>): EvUserExit_V1;
};
interface EvTransientJournalUpdateCancellation {
    v1?: EvTransientJournalUpdateCancellation_V1 | undefined;
}
declare const EvTransientJournalUpdateCancellation: {
    encode(message: EvTransientJournalUpdateCancellation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvTransientJournalUpdateCancellation;
    fromJSON(object: any): EvTransientJournalUpdateCancellation;
    toJSON(message: EvTransientJournalUpdateCancellation): unknown;
    fromPartial(object: DeepPartial$5<EvTransientJournalUpdateCancellation>): EvTransientJournalUpdateCancellation;
};
interface EvTransientJournalUpdateCancellation_V1 {
    uniqueId: string;
}
declare const EvTransientJournalUpdateCancellation_V1: {
    encode(message: EvTransientJournalUpdateCancellation_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvTransientJournalUpdateCancellation_V1;
    fromJSON(object: any): EvTransientJournalUpdateCancellation_V1;
    toJSON(message: EvTransientJournalUpdateCancellation_V1): unknown;
    fromPartial(object: DeepPartial$5<EvTransientJournalUpdateCancellation_V1>): EvTransientJournalUpdateCancellation_V1;
};
/** EvUserDeviceState is broadcast by users to describe which kind of device they are connected from. */
interface EvUserDeviceState {
    v1?: EvUserDeviceState_V1 | undefined;
}
declare const EvUserDeviceState: {
    encode(message: EvUserDeviceState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserDeviceState;
    fromJSON(object: any): EvUserDeviceState;
    toJSON(message: EvUserDeviceState): unknown;
    fromPartial(object: DeepPartial$5<EvUserDeviceState>): EvUserDeviceState;
};
interface EvUserDeviceState_V1 {
    /** a string describing the name of the device or OS. */
    deviceId?: string | undefined;
    /** A string describing the nature of that device (Desktop/Ar/Vr) */
    deviceMode?: string | undefined;
}
declare const EvUserDeviceState_V1: {
    encode(message: EvUserDeviceState_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserDeviceState_V1;
    fromJSON(object: any): EvUserDeviceState_V1;
    toJSON(message: EvUserDeviceState_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserDeviceState_V1>): EvUserDeviceState_V1;
};
/** EvUserClaimedObjectsState is broadcast by users when they take control of an object, to inform other users that they should not. */
interface EvUserClaimedObjectsState {
    v1?: EvUserClaimedObjectsState_V1 | undefined;
}
declare const EvUserClaimedObjectsState: {
    encode(message: EvUserClaimedObjectsState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserClaimedObjectsState;
    fromJSON(object: any): EvUserClaimedObjectsState;
    toJSON(message: EvUserClaimedObjectsState): unknown;
    fromPartial(object: DeepPartial$5<EvUserClaimedObjectsState>): EvUserClaimedObjectsState;
};
interface EvUserClaimedObjectsState_V1 {
    claimedObjects?: ObjectId[];
}
declare const EvUserClaimedObjectsState_V1: {
    encode(message: EvUserClaimedObjectsState_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserClaimedObjectsState_V1;
    fromJSON(object: any): EvUserClaimedObjectsState_V1;
    toJSON(message: EvUserClaimedObjectsState_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserClaimedObjectsState_V1>): EvUserClaimedObjectsState_V1;
};
/** EvUserMuteState is broadcast by users to inform others when they are muted or not. */
interface EvUserMuteState {
    v1?: EvUserMuteState_V1 | undefined;
}
declare const EvUserMuteState: {
    encode(message: EvUserMuteState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserMuteState;
    fromJSON(object: any): EvUserMuteState;
    toJSON(message: EvUserMuteState): unknown;
    fromPartial(object: DeepPartial$5<EvUserMuteState>): EvUserMuteState;
};
interface EvUserMuteState_V1 {
    muted: boolean;
}
declare const EvUserMuteState_V1: {
    encode(message: EvUserMuteState_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserMuteState_V1;
    fromJSON(object: any): EvUserMuteState_V1;
    toJSON(message: EvUserMuteState_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserMuteState_V1>): EvUserMuteState_V1;
};
/** EvRequestMuteUser is broadcast by a user to request that another user mute themselves. */
interface EvRequestMuteUser {
    v1?: EvRequestMuteUser_V1 | undefined;
}
declare const EvRequestMuteUser: {
    encode(message: EvRequestMuteUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvRequestMuteUser;
    fromJSON(object: any): EvRequestMuteUser;
    toJSON(message: EvRequestMuteUser): unknown;
    fromPartial(object: DeepPartial$5<EvRequestMuteUser>): EvRequestMuteUser;
};
interface EvRequestMuteUser_V1 {
    muted: boolean;
    /** The target user, requested to be muted. */
    connectionId: string;
}
declare const EvRequestMuteUser_V1: {
    encode(message: EvRequestMuteUser_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvRequestMuteUser_V1;
    fromJSON(object: any): EvRequestMuteUser_V1;
    toJSON(message: EvRequestMuteUser_V1): unknown;
    fromPartial(object: DeepPartial$5<EvRequestMuteUser_V1>): EvRequestMuteUser_V1;
};
/** EvRequestFollowUser is broadcast by a user to demand that another user follow them. */
interface EvRequestFollowUser {
    v1?: EvRequestFollowUser_V1 | undefined;
}
declare const EvRequestFollowUser: {
    encode(message: EvRequestFollowUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvRequestFollowUser;
    fromJSON(object: any): EvRequestFollowUser;
    toJSON(message: EvRequestFollowUser): unknown;
    fromPartial(object: DeepPartial$5<EvRequestFollowUser>): EvRequestFollowUser;
};
interface EvRequestFollowUser_V1 {
    connectionId: string;
}
declare const EvRequestFollowUser_V1: {
    encode(message: EvRequestFollowUser_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvRequestFollowUser_V1;
    fromJSON(object: any): EvRequestFollowUser_V1;
    toJSON(message: EvRequestFollowUser_V1): unknown;
    fromPartial(object: DeepPartial$5<EvRequestFollowUser_V1>): EvRequestFollowUser_V1;
};
/** EvRequestUserStream is broadcast by a user to demand that another user follow them. */
interface EvRequestUserStream {
    v1?: EvRequestUserStream_V1 | undefined;
}
declare const EvRequestUserStream: {
    encode(message: EvRequestUserStream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvRequestUserStream;
    fromJSON(object: any): EvRequestUserStream;
    toJSON(message: EvRequestUserStream): unknown;
    fromPartial(object: DeepPartial$5<EvRequestUserStream>): EvRequestUserStream;
};
interface EvRequestUserStream_V1 {
    requestOption: EvRequestUserStream_V1_StreamRequestOption;
    virtualCameraIdentifier: string;
}
declare const EvRequestUserStream_V1: {
    encode(message: EvRequestUserStream_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvRequestUserStream_V1;
    fromJSON(object: any): EvRequestUserStream_V1;
    toJSON(message: EvRequestUserStream_V1): unknown;
    fromPartial(object: DeepPartial$5<EvRequestUserStream_V1>): EvRequestUserStream_V1;
};
/** EvUserStremaState is broadcast to describe the nature of the video stream the user is sending. */
interface EvUserStreamState {
    /** deprecated and unused. V2 is current. */
    v1?: EvUserStreamState_V1 | undefined;
    v2?: EvUserStreamState_V2 | undefined;
}
declare const EvUserStreamState: {
    encode(message: EvUserStreamState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserStreamState;
    fromJSON(object: any): EvUserStreamState;
    toJSON(message: EvUserStreamState): unknown;
    fromPartial(object: DeepPartial$5<EvUserStreamState>): EvUserStreamState;
};
/** V1 is deprecated and unused. */
interface EvUserStreamState_V1 {
    mode: EvUserStreamState_V1_StreamStateMode;
    deviceName: string;
}
declare const EvUserStreamState_V1: {
    encode(message: EvUserStreamState_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserStreamState_V1;
    fromJSON(object: any): EvUserStreamState_V1;
    toJSON(message: EvUserStreamState_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserStreamState_V1>): EvUserStreamState_V1;
};
interface EvUserStreamState_V2 {
    presentationStreamActive: boolean;
    cameraStreamActive: boolean;
    videoDeviceName: string;
    audioDeviceName: string;
}
declare const EvUserStreamState_V2: {
    encode(message: EvUserStreamState_V2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserStreamState_V2;
    fromJSON(object: any): EvUserStreamState_V2;
    toJSON(message: EvUserStreamState_V2): unknown;
    fromPartial(object: DeepPartial$5<EvUserStreamState_V2>): EvUserStreamState_V2;
};
/** EvUserCommPing is used to broadcast a position in space to all other users. The application shows some graphics to highlight the target point. */
interface EvUserCommPing {
    v1?: EvUserCommPing_V1 | undefined;
}
declare const EvUserCommPing: {
    encode(message: EvUserCommPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserCommPing;
    fromJSON(object: any): EvUserCommPing;
    toJSON(message: EvUserCommPing): unknown;
    fromPartial(object: DeepPartial$5<EvUserCommPing>): EvUserCommPing;
};
interface EvUserCommPing_V1 {
    position?: Float3;
    color?: Color4;
}
declare const EvUserCommPing_V1: {
    encode(message: EvUserCommPing_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvUserCommPing_V1;
    fromJSON(object: any): EvUserCommPing_V1;
    toJSON(message: EvUserCommPing_V1): unknown;
    fromPartial(object: DeepPartial$5<EvUserCommPing_V1>): EvUserCommPing_V1;
};
declare type Builtin$5 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$5<T> = T extends Builtin$5 ? T : T extends Array<infer U> ? Array<DeepPartial$5<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$5<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$5<T[K]>;
} : Partial<T>;

declare enum AvatarRootV3_AvatarMovementStateEnum {
    None = 0,
    Jump = 1,
    Crouch = 2,
    Fly = 3,
    UNRECOGNIZED = -1
}
/**
 * EvTransientJournalUpdate represents a journal operation in-progress. For example, if a user is drawing on a whiteboard, they will first begin firing EvTransientJournalUpdates,
 * with an OpLine2d Operation. When the operation is complete, they will then submit the actual journal operation, and in it note that this transient operation is concluded.
 * They may also cancel the transition operation and not commit it to the full Journal.
 */
interface EvTransientJournalUpdate {
    v1?: EvTransientJournalUpdate_V1 | undefined;
}
declare const EvTransientJournalUpdate: {
    encode(message: EvTransientJournalUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvTransientJournalUpdate;
    fromJSON(object: any): EvTransientJournalUpdate;
    toJSON(message: EvTransientJournalUpdate): unknown;
    fromPartial(object: DeepPartial$4<EvTransientJournalUpdate>): EvTransientJournalUpdate;
};
interface EvTransientJournalUpdate_V1 {
    /** Uniquely identifies this EvTransientJournalUpdate. Further events with the same id should be considered updates rather than new operations. */
    uniqueId: string;
    line2d?: OpLine2d | undefined;
    text2d?: OpText2d | undefined;
    image2d?: OpImage2d | undefined;
    line3d?: OpLine3d | undefined;
    text3d?: OpText3d | undefined;
    image3d?: OpImage3d | undefined;
    /** Journal.OpModifyMaterialObject modifyMaterialObject = 31; */
    createObject?: OpCreateObject | undefined;
    setPartHighlight?: OpSetPartHighlight | undefined;
    updatePropertyValue?: OpUpdatePropertyValue | undefined;
    userAuthorityData?: OpUserAuthorityData | undefined;
}
declare const EvTransientJournalUpdate_V1: {
    encode(message: EvTransientJournalUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvTransientJournalUpdate_V1;
    fromJSON(object: any): EvTransientJournalUpdate_V1;
    toJSON(message: EvTransientJournalUpdate_V1): unknown;
    fromPartial(object: DeepPartial$4<EvTransientJournalUpdate_V1>): EvTransientJournalUpdate_V1;
};
/**
 * EvCopresence is sent periodically by connected users that are present in the space. It contains information about their 'physical' position and orientation, and that of their hands, among other similar metadata.
 * This type is one of the few that has had a major revision in the past. V1 is effectively deprecated and can be ignored.
 */
interface EvCopresence {
    v3?: EvCopresence_V3 | undefined;
}
declare const EvCopresence: {
    encode(message: EvCopresence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvCopresence;
    fromJSON(object: any): EvCopresence;
    toJSON(message: EvCopresence): unknown;
    fromPartial(object: DeepPartial$4<EvCopresence>): EvCopresence;
};
interface EvCopresence_V3 {
    fromConnectionId: string;
    followingConnectionId?: string | undefined;
    scale?: number | undefined;
    root?: AvatarRootV3 | undefined;
    leftController?: AvatarControllerV3 | undefined;
    rightController?: AvatarControllerV3 | undefined;
    view?: AvatarPositionV3 | undefined;
    head?: AvatarPositionV3 | undefined;
}
declare const EvCopresence_V3: {
    encode(message: EvCopresence_V3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvCopresence_V3;
    fromJSON(object: any): EvCopresence_V3;
    toJSON(message: EvCopresence_V3): unknown;
    fromPartial(object: DeepPartial$4<EvCopresence_V3>): EvCopresence_V3;
};
interface AvatarPositionV3 {
    position?: Float3;
    rotation?: Float3;
}
declare const AvatarPositionV3: {
    encode(message: AvatarPositionV3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AvatarPositionV3;
    fromJSON(object: any): AvatarPositionV3;
    toJSON(message: AvatarPositionV3): unknown;
    fromPartial(object: DeepPartial$4<AvatarPositionV3>): AvatarPositionV3;
};
interface AvatarControllerV3 {
    location?: AvatarPositionV3;
    beamTarget?: Float3 | undefined;
}
declare const AvatarControllerV3: {
    encode(message: AvatarControllerV3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AvatarControllerV3;
    fromJSON(object: any): AvatarControllerV3;
    toJSON(message: AvatarControllerV3): unknown;
    fromPartial(object: DeepPartial$4<AvatarControllerV3>): AvatarControllerV3;
};
interface AvatarRootV3 {
    location?: AvatarPositionV3;
    animationState?: AvatarRootV3_AvatarMovementStateEnum | undefined;
}
declare const AvatarRootV3: {
    encode(message: AvatarRootV3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AvatarRootV3;
    fromJSON(object: any): AvatarRootV3;
    toJSON(message: AvatarRootV3): unknown;
    fromPartial(object: DeepPartial$4<AvatarRootV3>): AvatarRootV3;
};
declare type Builtin$4 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$4<T> = T extends Builtin$4 ? T : T extends Array<infer U> ? Array<DeepPartial$4<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$4<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$4<T[K]>;
} : Partial<T>;

/** A TransientEntry is a uniquely identifiable transient event. It also holds which connected user is issuing this event. */
interface TransientEntry {
    time?: Date;
    connectionId?: string | undefined;
    ev?: TransientEvent;
    id?: string | undefined;
}
declare const TransientEntry: {
    encode(message: TransientEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransientEntry;
    fromJSON(object: any): TransientEntry;
    toJSON(message: TransientEntry): unknown;
    fromPartial(object: DeepPartial$3<TransientEntry>): TransientEntry;
};
/** TransientJournal is a sequence of TransientEntry. */
interface TransientJournal {
    entries?: TransientEntry[];
}
declare const TransientJournal: {
    encode(message: TransientJournal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransientJournal;
    fromJSON(object: any): TransientJournal;
    toJSON(message: TransientJournal): unknown;
    fromPartial(object: DeepPartial$3<TransientJournal>): TransientJournal;
};
/**
 * A TransientEvent is an occurance in the live space that is only relevant to users connected at the time of the event. These events are not stored in the main journal.
 * User presence, copresence, user state changes, and operations-in-progress are examples of TransientEvents.
 */
interface TransientEvent {
    userEnter?: EvUserEntry | undefined;
    userExit?: EvUserExit | undefined;
    copresence?: EvCopresence | undefined;
    transientJournalUpdate?: EvTransientJournalUpdate | undefined;
    userMuteState?: EvUserMuteState | undefined;
    userStreamState?: EvUserStreamState | undefined;
    userPing?: EvUserCommPing | undefined;
    transientJournalUpdateCancellation?: EvTransientJournalUpdateCancellation | undefined;
    userMuteRequest?: EvRequestMuteUser | undefined;
    userDeviceState?: EvUserDeviceState | undefined;
    userClaimedObjectsState?: EvUserClaimedObjectsState | undefined;
    requestFollowUser?: EvRequestFollowUser | undefined;
    requestUserStream?: EvRequestUserStream | undefined;
}
declare const TransientEvent: {
    encode(message: TransientEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransientEvent;
    fromJSON(object: any): TransientEvent;
    toJSON(message: TransientEvent): unknown;
    fromPartial(object: DeepPartial$3<TransientEvent>): TransientEvent;
};
declare type Builtin$3 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$3<T> = T extends Builtin$3 ? T : T extends Array<infer U> ? Array<DeepPartial$3<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$3<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$3<T[K]>;
} : Partial<T>;

declare const transient_d_TransientEntry: typeof TransientEntry;
declare const transient_d_TransientEntryRaw: typeof TransientEntryRaw;
declare const transient_d_TransientEvent: typeof TransientEvent;
declare const transient_d_TransientJournal: typeof TransientJournal;
declare const transient_d_TransientJournalRaw: typeof TransientJournalRaw;
declare namespace transient_d {
  export {
    DeepPartial$6 as DeepPartial,
    transient_d_TransientEntry as TransientEntry,
    transient_d_TransientEntryRaw as TransientEntryRaw,
    transient_d_TransientEvent as TransientEvent,
    transient_d_TransientJournal as TransientJournal,
    transient_d_TransientJournalRaw as TransientJournalRaw,
    protobufPackage$3 as protobufPackage,
  };
}

interface SessionConnSubSystem {
    shutdown(): void;
    handle_message(msg: CommDownstream$1): void;
    handle_transient(ev: TransientEntry): void;
}

declare type UserDevice = 'None' | 'AndroidDesktop' | 'StreamVr' | 'NoVRWindows' | 'WebGL' | 'iOS' | 'MacOS' | 'MagicLeap' | 'Focus' | 'WebClient' | 'OculusQuest' | 'Pico' | string;
interface SessionUser {
    userId: string;
    connectionId: string;
    muted: ReadonlyValue<boolean>;
    presentationStreamActive: ReadonlyValue<boolean>;
    cameraStreamActive: ReadonlyValue<boolean>;
    device: ReadonlyValue<UserDevice>;
    userProfile: ReadonlyValue<UserProfileInfo | undefined>;
}
declare function sessionUserDisplayName(su: SessionUser): ReadonlyValue<string>;
declare function userProfileDisplayName(up: UserProfileInfo | undefined): string;

interface SessionSystemUsers extends SessionConnSubSystem {
    readonly localUser: ReadonlyValue<SessionUser | undefined>;
    readonly users: ReadonlyValueMap<string, SessionUser>;
}
declare class SessionSystemUsersImpl implements SessionSystemUsers {
    private readonly conn;
    private _localUser;
    get localUser(): ReadonlyValue<SessionUser | undefined>;
    private _users;
    get users(): ReadonlyValueMap<string, SessionUser>;
    constructor(conn: SessionConnectionInternal);
    handle_message(msg: CommDownstream$1): void;
    handle_transient(te: TransientEntry): void;
    shutdown(): void;
}

declare type OperationId = string;
declare type ObjectRootId = string;
declare type ObjectSubId = string;
declare type ObjectComponentId = {
    objId: ObjectRootId;
    component: ObjectSubId;
};
declare type ObjectComponentOperationMap = ValueMap<OperationId, JournalEntry>;
declare type ObjectOperationMap = ValueMap<ObjectSubId, ObjectComponentOperationMap>;

declare type JournalObjectTypesRoots = 'whiteboard' | 'userboard' | 'streamboard' | 'textboard' | 'artracker' | 'content' | 'progress' | 'chatentry';
declare type JournalObjectTypesRootableAnnotations = 'line3d' | 'text3d' | 'image3d';
declare type JournalObjectTypesAnnotations = 'line2d' | 'text2d' | 'image2d';
declare type JournalObjectTypesAll = JournalObjectTypesRoots | JournalObjectTypesRootableAnnotations | JournalObjectTypesAnnotations;
interface JournalEntity {
    type: JournalObjectTypesAll;
    objectId: ObjectComponentId;
    contextObjectId: ReadonlyValue<ObjectComponentId | undefined>;
}
interface JournalObject extends JournalEntity {
    type: JournalObjectTypesRoots;
    creatorId: ReadonlyValue<string>;
}
interface JournalEntityInternal extends JournalEntity, Offable {
}
interface JournalObjectInternal extends JournalObject, Offable {
}

declare class JournalEntityCommon {
    objectId: ObjectComponentId;
    protected readonly operationMap: ObjectOperationMap;
    protected readonly contextualObjectsSrc: ContextualObjectsSource;
    _init: Value<JournalEntry>;
    protected hooks: Offable[];
    protected constructor(objectId: ObjectComponentId, init: JournalEntry, entries: ObjectOperationMap, contextualObsSrc: ContextualObjectsSource);
    update(init: JournalEntry): void;
    off(): void;
}
declare class JournalObjectCommon extends JournalEntityCommon {
    creatorId: ReadonlyValue<string>;
    protected constructor(objectId: ObjectComponentId, init: JournalEntry, entries: ObjectOperationMap, contextualObsSrc: ContextualObjectsSource);
}

declare class JournalEntityLine2d extends JournalEntityCommon implements JournalEntityInternal {
    type: 'line2d';
    readonly line2d: ReadonlyValue<OpLine2d_V1>;
    readonly points: ReadonlyValue<Float2[]>;
    readonly contextObjectId: ReadonlyValue<ObjectComponentId | undefined>;
    constructor(objectId: ObjectRootId, init: JournalEntry, opMap: ObjectOperationMap, contextualObsSrc: ContextualObjectsSource);
}

declare abstract class JournalObjectBoardCommon extends JournalObjectCommon {
    readonly contextObjectId: ReadonlyValue<ObjectComponentId | undefined>;
    private _annosByType;
    get line2ds(): ReadonlyValueMap<ObjectRootId, JournalEntityLine2d>;
    constructor(objectId: ObjectRootId, init: JournalEntry, opMap: ObjectOperationMap, contextualObsSrc: ContextualObjectsSource);
}

declare class JournalObjectWhiteboard extends JournalObjectBoardCommon implements JournalObjectInternal {
    type: 'whiteboard';
    readonly whiteboard: ReadonlyValue<BoardSizeData>;
    constructor(objectId: ObjectRootId, init: JournalEntry, opMap: ObjectOperationMap, contextualObsSrc: ContextualObjectsSource);
}

declare class JournalObjectProgress extends JournalObjectCommon implements JournalObjectInternal {
    type: 'progress';
    readonly progress: ReadonlyValue<Progress | undefined>;
    private readonly _contextObjectId;
    get contextObjectId(): ReadonlyValue<ObjectComponentId | undefined>;
    constructor(objectId: ObjectRootId, init: JournalEntry | undefined, opMap: ObjectOperationMap, contextualObs: ContextualObjectsSource);
    update(init: JournalEntry | undefined): void;
    off(): void;
}

declare class JournalObjectContent extends JournalObjectCommon implements JournalObjectInternal {
    type: 'content';
    readonly contextObjectId: ReadonlyValue<ObjectComponentId | undefined>;
    readonly contentId: ReadonlyValue<string | undefined>;
    constructor(objectId: ObjectRootId, init: JournalEntry, opMap: ObjectOperationMap, contextualObsSrc: ContextualObjectsSource);
}

declare type PropertyIdT = string;
declare type PropertyIdArg = PropertyIdT | string;
declare class PropertyId {
    static readonly SEPARATOR = "/";
    static readonly UP = "..";
    static readonly CUR = ".";
    static readonly ENCODED_SEPARATOR = "|";
    static isAbsolute(pid: PropertyIdArg): boolean;
    static pop(pid: PropertyIdArg): PropertyIdT;
    static push(pid: PropertyIdArg, id: string): PropertyIdT;
    static main(pid: PropertyIdArg): string;
    static sub(pid: PropertyIdArg): PropertyIdT;
    static split(pid: PropertyIdArg): {
        isAbsolute: boolean;
        steps: string[];
    };
    static resolve(...paths: PropertyIdArg[]): PropertyIdT;
    static resolveSplit(...paths: PropertyIdArg[]): {
        isAbsolute: boolean;
        steps: string[];
    };
}

declare type PropertyType = 'scalar' | 'string' | 'link' | 'vector' | 'color' | 'boolean' | 'json' | 'transform';
interface Property {
    readonly container: PropertyNode;
    readonly id: string;
    readonly absoluteId: PropertyIdT;
    readonly type: PropertyType;
}
declare class PropertyImpl {
    readonly container: PropertyNode;
    readonly id: string;
    get absoluteId(): PropertyIdT;
    protected constructor(id: string, container: PropertyNode);
}
interface PropertyTyped<TValue, TGenerator, TMeta> extends PropertyImpl {
    readonly current: ReadonlyValue<TValue>;
    readonly liveGenerator: ReadonlyValue<TGenerator | undefined>;
    readonly meta: ReadonlyValue<TMeta | undefined>;
    define(defaultValue: TValue, meta: TMeta): Offable;
    updateValue(assignmentId: string, priority: number, newGen: TGenerator): void;
    clearValue(assignmentId: string): void;
}
declare abstract class APropertyTyped<TValue, TGenerator, TMeta> extends PropertyImpl implements PropertyTyped<TValue, TGenerator, TMeta> {
    protected _current: ReadonlyValue<TValue>;
    protected _liveGenerator: ReadonlyValue<TGenerator | undefined>;
    protected _meta: Value<TMeta | undefined>;
    get current(): ReadonlyValue<TValue>;
    get liveGenerator(): ReadonlyValue<TGenerator | undefined>;
    get meta(): ReadonlyValue<TMeta | undefined>;
    private assignmentSet;
    private intrinsicDefaultValue;
    protected _defaultValue: Value<TValue>;
    private get defaultValue();
    protected constructor(id: string, container: PropertyNode, defaultValue: TValue);
    define(defaultValue: TValue, meta: TMeta): Offable;
    updateValue(assignmentId: string, priority: number, newGen: TGenerator): void;
    clearValue(assignmentId: string): void;
    protected abstract computeValue(gen: TGenerator): TValue;
}

declare class BooleanProperty extends APropertyTyped<boolean, BooleanPropertyValue, BooleanPropertyMetadata> {
    type: 'boolean';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: BooleanPropertyValue): boolean;
}

declare class ColorProperty extends APropertyTyped<Color4, ColorPropertyValue, ColorPropertyMetadata> {
    type: 'color';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: ColorPropertyValue): Color4;
}

declare class JsonProperty extends APropertyTyped<unknown, JsonPropertyValue, JsonPropertyMetadata> {
    type: 'json';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: JsonPropertyValue): unknown;
}

declare class LinkProperty extends APropertyTyped<PropertyId, LinkPropertyValue, LinkPropertyMetadata> {
    type: 'link';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: LinkPropertyValue): PropertyId;
}

declare class ScalarProperty extends APropertyTyped<number, ScalarPropertyValue, ScalarPropertyMetadata> {
    type: 'scalar';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: ScalarPropertyValue): number;
}

declare class StringProperty extends APropertyTyped<string, StringPropertyValue, StringPropertyMetadata> {
    type: 'string';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: StringPropertyValue): string;
}

declare class TransformProperty extends APropertyTyped<TransformSet | undefined, TransformSet, TransformPropertyMetadata> {
    type: 'transform';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: TransformSet): TransformSet;
}

declare class VectorProperty extends APropertyTyped<Float4, VectorPropertyValue, VectorPropertyMetadata> {
    type: 'vector';
    constructor(id: string, container: PropertyNode);
    protected computeValue(gen: VectorPropertyValue): Float4;
}

interface PropertyNode {
    id: string;
    absoluteId: PropertyIdT;
    parent: PropertyNode | undefined;
    allProperties: ReadonlyValueMap<string, Property>;
    allChildren: ReadonlyValueMap<string, PropertyNode>;
    getChild(id: string): PropertyNode;
    findRootNode(): PropertyNode;
    searchForNode(id: PropertyIdT): PropertyNode;
    getProperty(id: string): Property | undefined;
    searchForProperty(id: PropertyIdT): Property | undefined;
    getScalarProperty(id: string): ScalarProperty;
    searchForScalarProperty(id: PropertyIdT): ScalarProperty;
    getStringProperty(id: string): StringProperty;
    searchForStringProperty(id: PropertyIdT): StringProperty;
    getLinkProperty(id: string): LinkProperty;
    searchForLinkProperty(id: PropertyIdT): LinkProperty;
    getVectorProperty(id: string): VectorProperty;
    searchForVectorProperty(id: PropertyIdT): VectorProperty;
    getColorProperty(id: string): ColorProperty;
    searchForColorProperty(id: PropertyIdT): ColorProperty;
    getBooleanProperty(id: string): BooleanProperty;
    searchForBooleanProperty(id: PropertyIdT): BooleanProperty;
    getJsonProperty(id: string): JsonProperty;
    searchForJsonProperty(id: PropertyIdT): JsonProperty;
    getTransformProperty(id: string): TransformProperty;
    searchForTransformProperty(id: PropertyIdT): TransformProperty;
}

interface JournalEntityEntry {
    readonly rootId: ObjectRootId;
    readonly journalEntity: ReadonlyValue<JournalEntity>;
}
interface ContextualObjectsSource {
    getContextualObjectsFor(objectId: ObjectComponentId): ValueMap<ObjectRootId, JournalEntityEntry>;
}
interface LiveJournal {
    rootObjects: ReadonlyValueMap<ObjectRootId, JournalEntityEntry>;
    whiteboards: ReadonlyValueMap<ObjectRootId, JournalObjectWhiteboard>;
    progresses: ReadonlyValueMap<ObjectRootId, JournalObjectProgress>;
    contentObjects: ReadonlyValueMap<ObjectRootId, JournalObjectContent>;
}
declare class LiveJournalImpl implements LiveJournal, ContextualObjectsSource {
    private visManager;
    private _rootObjects;
    get rootObjects(): ReadonlyValueMap<ObjectRootId, JournalEntityEntry>;
    private _contextualObjects;
    private _rootObjectsByType;
    get whiteboards(): ReadonlyValueMap<ObjectRootId, JournalObjectWhiteboard>;
    get contentObjects(): ReadonlyValueMap<ObjectRootId, JournalObjectContent>;
    get progresses(): ReadonlyValueMap<ObjectRootId, JournalObjectProgress>;
    private _propertiesRoot;
    get propertiesRoot(): PropertyNode;
    private _propertiesConnector;
    constructor();
    receiveEntries(entries: JournalEntry[]): void;
    receiveEntry(entry: JournalEntry): void;
    private handleEntryAdded;
    private handleNewOrUpdatedObjectCreation;
    private determineIfEntryIsNewObjectAndYieldModifiedId;
    private determineIfEntryIfModificationAndYieldModifiedId;
    private handleEntryRemoval;
    private handleObjectRemoval;
    private getOrBuildObjectEntry;
    getContextualObjectsFor(objectId: ObjectComponentId): ValueMap<string, JournalEntityEntry>;
}

interface JournalEntryReceiver {
    receiveEntries(entries: JournalEntry[]): void;
    receiveEntry(entry: JournalEntry): void;
    removeEntry(opid: OperationId): void;
}

declare class JournalEntryRecord {
    entry: JournalEntry | undefined;
    readonly id: OperationId;
    readonly visibility: CountedBool;
    constructor(id: OperationId, entry: JournalEntry | undefined, initiallyVisibleCount: number);
}
declare class JournalEntryVisibleSet implements JournalEntryReceiver {
    private records;
    private _visibleRecords;
    get visibleRecords(): ReadonlyValueMap<OperationId, JournalEntry>;
    receiveEntries(entries: JournalEntry[]): void;
    receiveEntry(entry: JournalEntry): void;
    removeEntry(opid: OperationId): void;
    private applyVisibilityChange;
}

type index_d$2_ContextualObjectsSource = ContextualObjectsSource;
type index_d$2_JournalEntityEntry = JournalEntityEntry;
type index_d$2_JournalEntryRecord = JournalEntryRecord;
declare const index_d$2_JournalEntryRecord: typeof JournalEntryRecord;
type index_d$2_JournalEntryVisibleSet = JournalEntryVisibleSet;
declare const index_d$2_JournalEntryVisibleSet: typeof JournalEntryVisibleSet;
type index_d$2_LiveJournal = LiveJournal;
type index_d$2_LiveJournalImpl = LiveJournalImpl;
declare const index_d$2_LiveJournalImpl: typeof LiveJournalImpl;
declare namespace index_d$2 {
  export {
    index_d$2_ContextualObjectsSource as ContextualObjectsSource,
    index_d$2_JournalEntityEntry as JournalEntityEntry,
    index_d$2_JournalEntryRecord as JournalEntryRecord,
    index_d$2_JournalEntryVisibleSet as JournalEntryVisibleSet,
    index_d$2_LiveJournal as LiveJournal,
    index_d$2_LiveJournalImpl as LiveJournalImpl,
  };
}

interface SessionSystemJournal extends SessionConnSubSystem {
    readonly journal: LiveJournal;
    readonly properties: PropertyNode;
}
declare class SessionSystemJournalImpl implements SessionSystemJournal {
    private readonly conn;
    private _journal;
    get journal(): LiveJournal;
    get properties(): PropertyNode;
    constructor(conn: SessionConnectionInternal);
    handle_message(msg: CommDownstream$1): void;
    handle_transient(te: TransientEntry): void;
    shutdown(): void;
}

interface SessionSystemRtc extends SessionConnSubSystem {
    rerequestRtcAuthorization(clientId: string, deviceId: string): Promise<RtcAuthorization_V2 | undefined>;
}
declare class SessionSystemRtcImpl implements SessionSystemRtc {
    private readonly conn;
    private _reqId;
    private _requests;
    constructor(conn: SessionConnectionInternal);
    rerequestRtcAuthorization(clientId: string, deviceId: string): Promise<RtcAuthorization_V2 | undefined>;
    handle_message(msg: CommDownstream$1): void;
    handle_transient(te: TransientEntry): void;
    shutdown(): void;
}

declare function connectSession(api: CavrnusApiUser, roomId: string): Promise<SessionConnection>;
interface SessionConnection {
    readonly roomId: string;
    readonly connectionStatus: ReadonlyValue<ConnectionStatus>;
    readonly onDisconnected: ISimpleEvent<Error | undefined>;
    readonly users: SessionSystemUsers;
    readonly journal: SessionSystemJournal;
    readonly rtc: SessionSystemRtc;
    awaitConnInit(): Promise<void>;
    disconnect(): void;
    sendOp(op: Operation): void;
}
interface SessionConnectionInternal {
    send(comm: CommUpstream$1): void;
}
declare class SessionConnectionImpl implements SessionConnection, SessionConnectionInternal {
    readonly api: CavrnusApiUser;
    readonly roomId: string;
    private socket;
    private _initPromise;
    private _onDisconnected;
    get onDisconnected(): ISimpleEvent<Error | undefined>;
    private _connectionStatus;
    get connectionStatus(): ReadonlyValue<ConnectionStatus>;
    private compat;
    readonly users: SessionSystemUsers;
    readonly journal: SessionSystemJournal;
    readonly rtc: SessionSystemRtc;
    constructor(api: CavrnusApiUser, roomId: string, socket: ProtoWebsocket<CommUpstream$1, CommDownstream$1>);
    awaitConnInit(): Promise<void>;
    disconnect(): void;
    private unhook;
    private handle_disconnected;
    private handle_recvmsg;
    sendOp(op: Operation): void;
    send(comm: CommUpstream$1): void;
    private send_conninit;
    private maintain_keepalive;
    private send_keepalive;
    private static buildCompatability;
}

interface SessionConnectionRecvFullJournal {
    journal: Journal;
    timestamp: Date;
    roomMetadata: RoomMetadata;
}

declare const protobufPackage$1 = "Notify";
declare enum NsRequestResponseStatus_ResponseStatusEnum {
    ProtocolError = 0,
    Success = 200,
    BadRequest = 400,
    NotFound = 404,
    Forbidden = 403,
    InternalServerError = 500,
    UNRECOGNIZED = -1
}
declare function nsRequestResponseStatus_ResponseStatusEnumFromJSON(object: any): NsRequestResponseStatus_ResponseStatusEnum;
declare function nsRequestResponseStatus_ResponseStatusEnumToJSON(object: NsRequestResponseStatus_ResponseStatusEnum): string;
interface NsServerMetadataUpdate {
    v1?: NsServerMetadataUpdate_V1 | undefined;
}
declare const NsServerMetadataUpdate: {
    encode(message: NsServerMetadataUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsServerMetadataUpdate;
    fromJSON(object: any): NsServerMetadataUpdate;
    toJSON(message: NsServerMetadataUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsServerMetadataUpdate>): NsServerMetadataUpdate;
};
interface NsServerMetadataUpdate_V1 {
    serverMetadata?: ServerMetadata;
}
declare const NsServerMetadataUpdate_V1: {
    encode(message: NsServerMetadataUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsServerMetadataUpdate_V1;
    fromJSON(object: any): NsServerMetadataUpdate_V1;
    toJSON(message: NsServerMetadataUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsServerMetadataUpdate_V1>): NsServerMetadataUpdate_V1;
};
interface NsCustomerMetadataUpdate {
    v1?: NsCustomerMetadataUpdate_V1 | undefined;
}
declare const NsCustomerMetadataUpdate: {
    encode(message: NsCustomerMetadataUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsCustomerMetadataUpdate;
    fromJSON(object: any): NsCustomerMetadataUpdate;
    toJSON(message: NsCustomerMetadataUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsCustomerMetadataUpdate>): NsCustomerMetadataUpdate;
};
interface NsCustomerMetadataUpdate_V1 {
    customer?: CustomerProfileInfo;
}
declare const NsCustomerMetadataUpdate_V1: {
    encode(message: NsCustomerMetadataUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsCustomerMetadataUpdate_V1;
    fromJSON(object: any): NsCustomerMetadataUpdate_V1;
    toJSON(message: NsCustomerMetadataUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsCustomerMetadataUpdate_V1>): NsCustomerMetadataUpdate_V1;
};
interface NcGenericRequest {
    v1?: NcGenericRequest_V1 | undefined;
}
declare const NcGenericRequest: {
    encode(message: NcGenericRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcGenericRequest;
    fromJSON(object: any): NcGenericRequest;
    toJSON(message: NcGenericRequest): unknown;
    fromPartial(object: DeepPartial$2<NcGenericRequest>): NcGenericRequest;
};
interface NcGenericRequest_V1 {
    requestId: number;
}
declare const NcGenericRequest_V1: {
    encode(message: NcGenericRequest_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcGenericRequest_V1;
    fromJSON(object: any): NcGenericRequest_V1;
    toJSON(message: NcGenericRequest_V1): unknown;
    fromPartial(object: DeepPartial$2<NcGenericRequest_V1>): NcGenericRequest_V1;
};
interface NcGenericRelease {
    v1?: NcGenericRelease_V1 | undefined;
}
declare const NcGenericRelease: {
    encode(message: NcGenericRelease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcGenericRelease;
    fromJSON(object: any): NcGenericRelease;
    toJSON(message: NcGenericRelease): unknown;
    fromPartial(object: DeepPartial$2<NcGenericRelease>): NcGenericRelease;
};
interface NcGenericRelease_V1 {
}
declare const NcGenericRelease_V1: {
    encode(_: NcGenericRelease_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcGenericRelease_V1;
    fromJSON(_: any): NcGenericRelease_V1;
    toJSON(_: NcGenericRelease_V1): unknown;
    fromPartial(_: DeepPartial$2<NcGenericRelease_V1>): NcGenericRelease_V1;
};
interface NsRequestResponseStatus {
    v1?: NsRequestResponseStatus_V1 | undefined;
}
declare const NsRequestResponseStatus: {
    encode(message: NsRequestResponseStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRequestResponseStatus;
    fromJSON(object: any): NsRequestResponseStatus;
    toJSON(message: NsRequestResponseStatus): unknown;
    fromPartial(object: DeepPartial$2<NsRequestResponseStatus>): NsRequestResponseStatus;
};
interface NsRequestResponseStatus_V1 {
    requestId: number;
    /** Http-like */
    statusCode: NsRequestResponseStatus_ResponseStatusEnum;
    errorMessage: string;
}
declare const NsRequestResponseStatus_V1: {
    encode(message: NsRequestResponseStatus_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRequestResponseStatus_V1;
    fromJSON(object: any): NsRequestResponseStatus_V1;
    toJSON(message: NsRequestResponseStatus_V1): unknown;
    fromPartial(object: DeepPartial$2<NsRequestResponseStatus_V1>): NsRequestResponseStatus_V1;
};
interface NcUpdateSelfStatus {
    v1?: NcUpdateSelfStatus_V1 | undefined;
}
declare const NcUpdateSelfStatus: {
    encode(message: NcUpdateSelfStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcUpdateSelfStatus;
    fromJSON(object: any): NcUpdateSelfStatus;
    toJSON(message: NcUpdateSelfStatus): unknown;
    fromPartial(object: DeepPartial$2<NcUpdateSelfStatus>): NcUpdateSelfStatus;
};
interface NcUpdateSelfStatus_V1 {
    status?: ClientStatus;
}
declare const NcUpdateSelfStatus_V1: {
    encode(message: NcUpdateSelfStatus_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcUpdateSelfStatus_V1;
    fromJSON(object: any): NcUpdateSelfStatus_V1;
    toJSON(message: NcUpdateSelfStatus_V1): unknown;
    fromPartial(object: DeepPartial$2<NcUpdateSelfStatus_V1>): NcUpdateSelfStatus_V1;
};
interface NsUserUpdate {
    v1?: NsUserUpdate_V1 | undefined;
}
declare const NsUserUpdate: {
    encode(message: NsUserUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserUpdate;
    fromJSON(object: any): NsUserUpdate;
    toJSON(message: NsUserUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsUserUpdate>): NsUserUpdate;
};
interface NsUserUpdate_V1 {
    userProfile?: UserProfileInfo;
}
declare const NsUserUpdate_V1: {
    encode(message: NsUserUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserUpdate_V1;
    fromJSON(object: any): NsUserUpdate_V1;
    toJSON(message: NsUserUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsUserUpdate_V1>): NsUserUpdate_V1;
};
interface NsUserAdded {
    v1?: NsUserAdded_V1 | undefined;
}
declare const NsUserAdded: {
    encode(message: NsUserAdded, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserAdded;
    fromJSON(object: any): NsUserAdded;
    toJSON(message: NsUserAdded): unknown;
    fromPartial(object: DeepPartial$2<NsUserAdded>): NsUserAdded;
};
interface NsUserAdded_V1 {
    userProfile?: UserProfileInfo;
}
declare const NsUserAdded_V1: {
    encode(message: NsUserAdded_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserAdded_V1;
    fromJSON(object: any): NsUserAdded_V1;
    toJSON(message: NsUserAdded_V1): unknown;
    fromPartial(object: DeepPartial$2<NsUserAdded_V1>): NsUserAdded_V1;
};
interface NsUserRemoved {
    v1?: NsUserRemoved_V1 | undefined;
}
declare const NsUserRemoved: {
    encode(message: NsUserRemoved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserRemoved;
    fromJSON(object: any): NsUserRemoved;
    toJSON(message: NsUserRemoved): unknown;
    fromPartial(object: DeepPartial$2<NsUserRemoved>): NsUserRemoved;
};
interface NsUserRemoved_V1 {
    userId: string;
}
declare const NsUserRemoved_V1: {
    encode(message: NsUserRemoved_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserRemoved_V1;
    fromJSON(object: any): NsUserRemoved_V1;
    toJSON(message: NsUserRemoved_V1): unknown;
    fromPartial(object: DeepPartial$2<NsUserRemoved_V1>): NsUserRemoved_V1;
};
interface NsUserConnectionStatus {
    v1?: NsUserConnectionStatus_V1 | undefined;
}
declare const NsUserConnectionStatus: {
    encode(message: NsUserConnectionStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserConnectionStatus;
    fromJSON(object: any): NsUserConnectionStatus;
    toJSON(message: NsUserConnectionStatus): unknown;
    fromPartial(object: DeepPartial$2<NsUserConnectionStatus>): NsUserConnectionStatus;
};
interface NsUserConnectionStatus_V1 {
    status?: UserConnectionStatus;
}
declare const NsUserConnectionStatus_V1: {
    encode(message: NsUserConnectionStatus_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsUserConnectionStatus_V1;
    fromJSON(object: any): NsUserConnectionStatus_V1;
    toJSON(message: NsUserConnectionStatus_V1): unknown;
    fromPartial(object: DeepPartial$2<NsUserConnectionStatus_V1>): NsUserConnectionStatus_V1;
};
interface NcRoomRequestSpecific {
    v1?: NcRoomRequestSpecific_V1 | undefined;
}
declare const NcRoomRequestSpecific: {
    encode(message: NcRoomRequestSpecific, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcRoomRequestSpecific;
    fromJSON(object: any): NcRoomRequestSpecific;
    toJSON(message: NcRoomRequestSpecific): unknown;
    fromPartial(object: DeepPartial$2<NcRoomRequestSpecific>): NcRoomRequestSpecific;
};
interface NcRoomRequestSpecific_V1 {
    roomId: string;
    requestId: number;
}
declare const NcRoomRequestSpecific_V1: {
    encode(message: NcRoomRequestSpecific_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcRoomRequestSpecific_V1;
    fromJSON(object: any): NcRoomRequestSpecific_V1;
    toJSON(message: NcRoomRequestSpecific_V1): unknown;
    fromPartial(object: DeepPartial$2<NcRoomRequestSpecific_V1>): NcRoomRequestSpecific_V1;
};
interface NsRoomUpdate {
    v1?: NsRoomUpdate_V1 | undefined;
}
declare const NsRoomUpdate: {
    encode(message: NsRoomUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomUpdate;
    fromJSON(object: any): NsRoomUpdate;
    toJSON(message: NsRoomUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsRoomUpdate>): NsRoomUpdate;
};
interface NsRoomUpdate_V1 {
    room?: RoomMetadata;
}
declare const NsRoomUpdate_V1: {
    encode(message: NsRoomUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomUpdate_V1;
    fromJSON(object: any): NsRoomUpdate_V1;
    toJSON(message: NsRoomUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsRoomUpdate_V1>): NsRoomUpdate_V1;
};
interface NsRoomMemberUpdate {
    v1?: NsRoomMemberUpdate_V1 | undefined;
}
declare const NsRoomMemberUpdate: {
    encode(message: NsRoomMemberUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomMemberUpdate;
    fromJSON(object: any): NsRoomMemberUpdate;
    toJSON(message: NsRoomMemberUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsRoomMemberUpdate>): NsRoomMemberUpdate;
};
interface NsRoomMemberUpdate_V1 {
    roomId: string;
    member?: RoomMemberMetadata;
}
declare const NsRoomMemberUpdate_V1: {
    encode(message: NsRoomMemberUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomMemberUpdate_V1;
    fromJSON(object: any): NsRoomMemberUpdate_V1;
    toJSON(message: NsRoomMemberUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsRoomMemberUpdate_V1>): NsRoomMemberUpdate_V1;
};
interface NsRoomRemoved {
    v1?: NsRoomRemoved_V1 | undefined;
}
declare const NsRoomRemoved: {
    encode(message: NsRoomRemoved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomRemoved;
    fromJSON(object: any): NsRoomRemoved;
    toJSON(message: NsRoomRemoved): unknown;
    fromPartial(object: DeepPartial$2<NsRoomRemoved>): NsRoomRemoved;
};
interface NsRoomRemoved_V1 {
    roomId: string;
}
declare const NsRoomRemoved_V1: {
    encode(message: NsRoomRemoved_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomRemoved_V1;
    fromJSON(object: any): NsRoomRemoved_V1;
    toJSON(message: NsRoomRemoved_V1): unknown;
    fromPartial(object: DeepPartial$2<NsRoomRemoved_V1>): NsRoomRemoved_V1;
};
interface NsRoomMemberRemoved {
    v1?: NsRoomMemberRemoved_V1 | undefined;
}
declare const NsRoomMemberRemoved: {
    encode(message: NsRoomMemberRemoved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomMemberRemoved;
    fromJSON(object: any): NsRoomMemberRemoved;
    toJSON(message: NsRoomMemberRemoved): unknown;
    fromPartial(object: DeepPartial$2<NsRoomMemberRemoved>): NsRoomMemberRemoved;
};
interface NsRoomMemberRemoved_V1 {
    roomId: string;
    userId: string;
    userEmail: string;
}
declare const NsRoomMemberRemoved_V1: {
    encode(message: NsRoomMemberRemoved_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomMemberRemoved_V1;
    fromJSON(object: any): NsRoomMemberRemoved_V1;
    toJSON(message: NsRoomMemberRemoved_V1): unknown;
    fromPartial(object: DeepPartial$2<NsRoomMemberRemoved_V1>): NsRoomMemberRemoved_V1;
};
interface NcObjectRequestSpecific {
    v1?: NcObjectRequestSpecific_V1 | undefined;
}
declare const NcObjectRequestSpecific: {
    encode(message: NcObjectRequestSpecific, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcObjectRequestSpecific;
    fromJSON(object: any): NcObjectRequestSpecific;
    toJSON(message: NcObjectRequestSpecific): unknown;
    fromPartial(object: DeepPartial$2<NcObjectRequestSpecific>): NcObjectRequestSpecific;
};
interface NcObjectRequestSpecific_V1 {
    contentId: string;
    requestId: number;
}
declare const NcObjectRequestSpecific_V1: {
    encode(message: NcObjectRequestSpecific_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcObjectRequestSpecific_V1;
    fromJSON(object: any): NcObjectRequestSpecific_V1;
    toJSON(message: NcObjectRequestSpecific_V1): unknown;
    fromPartial(object: DeepPartial$2<NcObjectRequestSpecific_V1>): NcObjectRequestSpecific_V1;
};
interface NcObjectRequestSet {
    v1?: NcObjectRequestSet_V1 | undefined;
}
declare const NcObjectRequestSet: {
    encode(message: NcObjectRequestSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcObjectRequestSet;
    fromJSON(object: any): NcObjectRequestSet;
    toJSON(message: NcObjectRequestSet): unknown;
    fromPartial(object: DeepPartial$2<NcObjectRequestSet>): NcObjectRequestSet;
};
interface NcObjectRequestSet_V1 {
    set: string;
    requestId: number;
}
declare const NcObjectRequestSet_V1: {
    encode(message: NcObjectRequestSet_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcObjectRequestSet_V1;
    fromJSON(object: any): NcObjectRequestSet_V1;
    toJSON(message: NcObjectRequestSet_V1): unknown;
    fromPartial(object: DeepPartial$2<NcObjectRequestSet_V1>): NcObjectRequestSet_V1;
};
interface NsObjectUpdate {
    v1?: NsObjectUpdate_V1 | undefined;
}
declare const NsObjectUpdate: {
    encode(message: NsObjectUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectUpdate;
    fromJSON(object: any): NsObjectUpdate;
    toJSON(message: NsObjectUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsObjectUpdate>): NsObjectUpdate;
};
interface NsObjectUpdate_V1 {
    contentData?: ObjectData;
}
declare const NsObjectUpdate_V1: {
    encode(message: NsObjectUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectUpdate_V1;
    fromJSON(object: any): NsObjectUpdate_V1;
    toJSON(message: NsObjectUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsObjectUpdate_V1>): NsObjectUpdate_V1;
};
interface NsObjectMemberUpdate {
    v1?: NsObjectMemberUpdate_V1 | undefined;
}
declare const NsObjectMemberUpdate: {
    encode(message: NsObjectMemberUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectMemberUpdate;
    fromJSON(object: any): NsObjectMemberUpdate;
    toJSON(message: NsObjectMemberUpdate): unknown;
    fromPartial(object: DeepPartial$2<NsObjectMemberUpdate>): NsObjectMemberUpdate;
};
interface NsObjectMemberUpdate_V1 {
    objectId: string;
    memberData?: ObjectMember;
}
declare const NsObjectMemberUpdate_V1: {
    encode(message: NsObjectMemberUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectMemberUpdate_V1;
    fromJSON(object: any): NsObjectMemberUpdate_V1;
    toJSON(message: NsObjectMemberUpdate_V1): unknown;
    fromPartial(object: DeepPartial$2<NsObjectMemberUpdate_V1>): NsObjectMemberUpdate_V1;
};
interface NsObjectDelete {
    v1?: NsObjectDelete_V1 | undefined;
}
declare const NsObjectDelete: {
    encode(message: NsObjectDelete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectDelete;
    fromJSON(object: any): NsObjectDelete;
    toJSON(message: NsObjectDelete): unknown;
    fromPartial(object: DeepPartial$2<NsObjectDelete>): NsObjectDelete;
};
interface NsObjectDelete_V1 {
    objectId: string;
}
declare const NsObjectDelete_V1: {
    encode(message: NsObjectDelete_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectDelete_V1;
    fromJSON(object: any): NsObjectDelete_V1;
    toJSON(message: NsObjectDelete_V1): unknown;
    fromPartial(object: DeepPartial$2<NsObjectDelete_V1>): NsObjectDelete_V1;
};
interface NsObjectMemberDelete {
    v1?: NsObjectMemberDelete_V1 | undefined;
}
declare const NsObjectMemberDelete: {
    encode(message: NsObjectMemberDelete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectMemberDelete;
    fromJSON(object: any): NsObjectMemberDelete;
    toJSON(message: NsObjectMemberDelete): unknown;
    fromPartial(object: DeepPartial$2<NsObjectMemberDelete>): NsObjectMemberDelete;
};
interface NsObjectMemberDelete_V1 {
    objectId: string;
    entityId: string;
    entityType: ObjectMemberEntityType;
}
declare const NsObjectMemberDelete_V1: {
    encode(message: NsObjectMemberDelete_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsObjectMemberDelete_V1;
    fromJSON(object: any): NsObjectMemberDelete_V1;
    toJSON(message: NsObjectMemberDelete_V1): unknown;
    fromPartial(object: DeepPartial$2<NsObjectMemberDelete_V1>): NsObjectMemberDelete_V1;
};
interface NcRoomJournalRequest {
    v1?: NcRoomJournalRequest_V1 | undefined;
}
declare const NcRoomJournalRequest: {
    encode(message: NcRoomJournalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcRoomJournalRequest;
    fromJSON(object: any): NcRoomJournalRequest;
    toJSON(message: NcRoomJournalRequest): unknown;
    fromPartial(object: DeepPartial$2<NcRoomJournalRequest>): NcRoomJournalRequest;
};
interface NcRoomJournalRequest_V1 {
    roomId: string;
    requestId: number;
    operationTypes: number[];
}
declare const NcRoomJournalRequest_V1: {
    encode(message: NcRoomJournalRequest_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcRoomJournalRequest_V1;
    fromJSON(object: any): NcRoomJournalRequest_V1;
    toJSON(message: NcRoomJournalRequest_V1): unknown;
    fromPartial(object: DeepPartial$2<NcRoomJournalRequest_V1>): NcRoomJournalRequest_V1;
};
interface NcRoomJournalRelease {
    v1?: NcRoomJournalRelease_V1 | undefined;
}
declare const NcRoomJournalRelease: {
    encode(message: NcRoomJournalRelease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcRoomJournalRelease;
    fromJSON(object: any): NcRoomJournalRelease;
    toJSON(message: NcRoomJournalRelease): unknown;
    fromPartial(object: DeepPartial$2<NcRoomJournalRelease>): NcRoomJournalRelease;
};
interface NcRoomJournalRelease_V1 {
    roomId: string;
    requestId: number;
    operationTypes: number[];
}
declare const NcRoomJournalRelease_V1: {
    encode(message: NcRoomJournalRelease_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NcRoomJournalRelease_V1;
    fromJSON(object: any): NcRoomJournalRelease_V1;
    toJSON(message: NcRoomJournalRelease_V1): unknown;
    fromPartial(object: DeepPartial$2<NcRoomJournalRelease_V1>): NcRoomJournalRelease_V1;
};
declare type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends Array<infer U> ? Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$2<T[K]>;
} : Partial<T>;

declare const notify_events_d_NcGenericRelease: typeof NcGenericRelease;
declare const notify_events_d_NcGenericRelease_V1: typeof NcGenericRelease_V1;
declare const notify_events_d_NcGenericRequest: typeof NcGenericRequest;
declare const notify_events_d_NcGenericRequest_V1: typeof NcGenericRequest_V1;
declare const notify_events_d_NcObjectRequestSet: typeof NcObjectRequestSet;
declare const notify_events_d_NcObjectRequestSet_V1: typeof NcObjectRequestSet_V1;
declare const notify_events_d_NcObjectRequestSpecific: typeof NcObjectRequestSpecific;
declare const notify_events_d_NcObjectRequestSpecific_V1: typeof NcObjectRequestSpecific_V1;
declare const notify_events_d_NcRoomJournalRelease: typeof NcRoomJournalRelease;
declare const notify_events_d_NcRoomJournalRelease_V1: typeof NcRoomJournalRelease_V1;
declare const notify_events_d_NcRoomJournalRequest: typeof NcRoomJournalRequest;
declare const notify_events_d_NcRoomJournalRequest_V1: typeof NcRoomJournalRequest_V1;
declare const notify_events_d_NcRoomRequestSpecific: typeof NcRoomRequestSpecific;
declare const notify_events_d_NcRoomRequestSpecific_V1: typeof NcRoomRequestSpecific_V1;
declare const notify_events_d_NcUpdateSelfStatus: typeof NcUpdateSelfStatus;
declare const notify_events_d_NcUpdateSelfStatus_V1: typeof NcUpdateSelfStatus_V1;
declare const notify_events_d_NsCustomerMetadataUpdate: typeof NsCustomerMetadataUpdate;
declare const notify_events_d_NsCustomerMetadataUpdate_V1: typeof NsCustomerMetadataUpdate_V1;
declare const notify_events_d_NsObjectDelete: typeof NsObjectDelete;
declare const notify_events_d_NsObjectDelete_V1: typeof NsObjectDelete_V1;
declare const notify_events_d_NsObjectMemberDelete: typeof NsObjectMemberDelete;
declare const notify_events_d_NsObjectMemberDelete_V1: typeof NsObjectMemberDelete_V1;
declare const notify_events_d_NsObjectMemberUpdate: typeof NsObjectMemberUpdate;
declare const notify_events_d_NsObjectMemberUpdate_V1: typeof NsObjectMemberUpdate_V1;
declare const notify_events_d_NsObjectUpdate: typeof NsObjectUpdate;
declare const notify_events_d_NsObjectUpdate_V1: typeof NsObjectUpdate_V1;
declare const notify_events_d_NsRequestResponseStatus: typeof NsRequestResponseStatus;
type notify_events_d_NsRequestResponseStatus_ResponseStatusEnum = NsRequestResponseStatus_ResponseStatusEnum;
declare const notify_events_d_NsRequestResponseStatus_ResponseStatusEnum: typeof NsRequestResponseStatus_ResponseStatusEnum;
declare const notify_events_d_NsRequestResponseStatus_V1: typeof NsRequestResponseStatus_V1;
declare const notify_events_d_NsRoomMemberRemoved: typeof NsRoomMemberRemoved;
declare const notify_events_d_NsRoomMemberRemoved_V1: typeof NsRoomMemberRemoved_V1;
declare const notify_events_d_NsRoomMemberUpdate: typeof NsRoomMemberUpdate;
declare const notify_events_d_NsRoomMemberUpdate_V1: typeof NsRoomMemberUpdate_V1;
declare const notify_events_d_NsRoomRemoved: typeof NsRoomRemoved;
declare const notify_events_d_NsRoomRemoved_V1: typeof NsRoomRemoved_V1;
declare const notify_events_d_NsRoomUpdate: typeof NsRoomUpdate;
declare const notify_events_d_NsRoomUpdate_V1: typeof NsRoomUpdate_V1;
declare const notify_events_d_NsServerMetadataUpdate: typeof NsServerMetadataUpdate;
declare const notify_events_d_NsServerMetadataUpdate_V1: typeof NsServerMetadataUpdate_V1;
declare const notify_events_d_NsUserAdded: typeof NsUserAdded;
declare const notify_events_d_NsUserAdded_V1: typeof NsUserAdded_V1;
declare const notify_events_d_NsUserConnectionStatus: typeof NsUserConnectionStatus;
declare const notify_events_d_NsUserConnectionStatus_V1: typeof NsUserConnectionStatus_V1;
declare const notify_events_d_NsUserRemoved: typeof NsUserRemoved;
declare const notify_events_d_NsUserRemoved_V1: typeof NsUserRemoved_V1;
declare const notify_events_d_NsUserUpdate: typeof NsUserUpdate;
declare const notify_events_d_NsUserUpdate_V1: typeof NsUserUpdate_V1;
declare const notify_events_d_nsRequestResponseStatus_ResponseStatusEnumFromJSON: typeof nsRequestResponseStatus_ResponseStatusEnumFromJSON;
declare const notify_events_d_nsRequestResponseStatus_ResponseStatusEnumToJSON: typeof nsRequestResponseStatus_ResponseStatusEnumToJSON;
declare namespace notify_events_d {
  export {
    DeepPartial$2 as DeepPartial,
    notify_events_d_NcGenericRelease as NcGenericRelease,
    notify_events_d_NcGenericRelease_V1 as NcGenericRelease_V1,
    notify_events_d_NcGenericRequest as NcGenericRequest,
    notify_events_d_NcGenericRequest_V1 as NcGenericRequest_V1,
    notify_events_d_NcObjectRequestSet as NcObjectRequestSet,
    notify_events_d_NcObjectRequestSet_V1 as NcObjectRequestSet_V1,
    notify_events_d_NcObjectRequestSpecific as NcObjectRequestSpecific,
    notify_events_d_NcObjectRequestSpecific_V1 as NcObjectRequestSpecific_V1,
    notify_events_d_NcRoomJournalRelease as NcRoomJournalRelease,
    notify_events_d_NcRoomJournalRelease_V1 as NcRoomJournalRelease_V1,
    notify_events_d_NcRoomJournalRequest as NcRoomJournalRequest,
    notify_events_d_NcRoomJournalRequest_V1 as NcRoomJournalRequest_V1,
    notify_events_d_NcRoomRequestSpecific as NcRoomRequestSpecific,
    notify_events_d_NcRoomRequestSpecific_V1 as NcRoomRequestSpecific_V1,
    notify_events_d_NcUpdateSelfStatus as NcUpdateSelfStatus,
    notify_events_d_NcUpdateSelfStatus_V1 as NcUpdateSelfStatus_V1,
    notify_events_d_NsCustomerMetadataUpdate as NsCustomerMetadataUpdate,
    notify_events_d_NsCustomerMetadataUpdate_V1 as NsCustomerMetadataUpdate_V1,
    notify_events_d_NsObjectDelete as NsObjectDelete,
    notify_events_d_NsObjectDelete_V1 as NsObjectDelete_V1,
    notify_events_d_NsObjectMemberDelete as NsObjectMemberDelete,
    notify_events_d_NsObjectMemberDelete_V1 as NsObjectMemberDelete_V1,
    notify_events_d_NsObjectMemberUpdate as NsObjectMemberUpdate,
    notify_events_d_NsObjectMemberUpdate_V1 as NsObjectMemberUpdate_V1,
    notify_events_d_NsObjectUpdate as NsObjectUpdate,
    notify_events_d_NsObjectUpdate_V1 as NsObjectUpdate_V1,
    notify_events_d_NsRequestResponseStatus as NsRequestResponseStatus,
    notify_events_d_NsRequestResponseStatus_ResponseStatusEnum as NsRequestResponseStatus_ResponseStatusEnum,
    notify_events_d_NsRequestResponseStatus_V1 as NsRequestResponseStatus_V1,
    notify_events_d_NsRoomMemberRemoved as NsRoomMemberRemoved,
    notify_events_d_NsRoomMemberRemoved_V1 as NsRoomMemberRemoved_V1,
    notify_events_d_NsRoomMemberUpdate as NsRoomMemberUpdate,
    notify_events_d_NsRoomMemberUpdate_V1 as NsRoomMemberUpdate_V1,
    notify_events_d_NsRoomRemoved as NsRoomRemoved,
    notify_events_d_NsRoomRemoved_V1 as NsRoomRemoved_V1,
    notify_events_d_NsRoomUpdate as NsRoomUpdate,
    notify_events_d_NsRoomUpdate_V1 as NsRoomUpdate_V1,
    notify_events_d_NsServerMetadataUpdate as NsServerMetadataUpdate,
    notify_events_d_NsServerMetadataUpdate_V1 as NsServerMetadataUpdate_V1,
    notify_events_d_NsUserAdded as NsUserAdded,
    notify_events_d_NsUserAdded_V1 as NsUserAdded_V1,
    notify_events_d_NsUserConnectionStatus as NsUserConnectionStatus,
    notify_events_d_NsUserConnectionStatus_V1 as NsUserConnectionStatus_V1,
    notify_events_d_NsUserRemoved as NsUserRemoved,
    notify_events_d_NsUserRemoved_V1 as NsUserRemoved_V1,
    notify_events_d_NsUserUpdate as NsUserUpdate,
    notify_events_d_NsUserUpdate_V1 as NsUserUpdate_V1,
    notify_events_d_nsRequestResponseStatus_ResponseStatusEnumFromJSON as nsRequestResponseStatus_ResponseStatusEnumFromJSON,
    notify_events_d_nsRequestResponseStatus_ResponseStatusEnumToJSON as nsRequestResponseStatus_ResponseStatusEnumToJSON,
    protobufPackage$1 as protobufPackage,
  };
}

declare const protobufPackage = "NotifySession";
interface ServerUpstreamVersionCompatability {
    v1?: ServerUpstreamVersionCompatability_V1 | undefined;
}
declare const ServerUpstreamVersionCompatability: {
    encode(message: ServerUpstreamVersionCompatability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerUpstreamVersionCompatability;
    fromJSON(object: any): ServerUpstreamVersionCompatability;
    toJSON(message: ServerUpstreamVersionCompatability): unknown;
    fromPartial(object: DeepPartial$1<ServerUpstreamVersionCompatability>): ServerUpstreamVersionCompatability;
};
interface ServerUpstreamVersionCompatability_V1 {
    upstreamDownstreamSelection: number;
    userStatusUpdate: number;
    usersRequest: number;
    usersRelease: number;
    ping: number;
}
declare const ServerUpstreamVersionCompatability_V1: {
    encode(message: ServerUpstreamVersionCompatability_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerUpstreamVersionCompatability_V1;
    fromJSON(object: any): ServerUpstreamVersionCompatability_V1;
    toJSON(message: ServerUpstreamVersionCompatability_V1): unknown;
    fromPartial(object: DeepPartial$1<ServerUpstreamVersionCompatability_V1>): ServerUpstreamVersionCompatability_V1;
};
interface ClientDownstreamVersionCompatability {
    v1?: ClientDownstreamVersionCompatability_V1 | undefined;
}
declare const ClientDownstreamVersionCompatability: {
    encode(message: ClientDownstreamVersionCompatability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientDownstreamVersionCompatability;
    fromJSON(object: any): ClientDownstreamVersionCompatability;
    toJSON(message: ClientDownstreamVersionCompatability): unknown;
    fromPartial(object: DeepPartial$1<ClientDownstreamVersionCompatability>): ClientDownstreamVersionCompatability;
};
interface ClientDownstreamVersionCompatability_V1 {
    upstreamDownstreamSelection: number;
    connectionInfo: number;
    requestResponse: number;
    userUpdate: number;
    userStatus: number;
    userAdded: number;
    userRemoved: number;
    ping: number;
    serverMessage: number;
}
declare const ClientDownstreamVersionCompatability_V1: {
    encode(message: ClientDownstreamVersionCompatability_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientDownstreamVersionCompatability_V1;
    fromJSON(object: any): ClientDownstreamVersionCompatability_V1;
    toJSON(message: ClientDownstreamVersionCompatability_V1): unknown;
    fromPartial(object: DeepPartial$1<ClientDownstreamVersionCompatability_V1>): ClientDownstreamVersionCompatability_V1;
};
interface ConnectionInfo {
    v1?: ConnectionInfo_V1 | undefined;
}
declare const ConnectionInfo: {
    encode(message: ConnectionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionInfo;
    fromJSON(object: any): ConnectionInfo;
    toJSON(message: ConnectionInfo): unknown;
    fromPartial(object: DeepPartial$1<ConnectionInfo>): ConnectionInfo;
};
interface ConnectionInfo_V1 {
    userId: string;
    connectionId: string;
    permission: string;
    serverMetadata?: ServerMetadata;
    customer?: CustomerProfileInfo;
}
declare const ConnectionInfo_V1: {
    encode(message: ConnectionInfo_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionInfo_V1;
    fromJSON(object: any): ConnectionInfo_V1;
    toJSON(message: ConnectionInfo_V1): unknown;
    fromPartial(object: DeepPartial$1<ConnectionInfo_V1>): ConnectionInfo_V1;
};
interface CommUpstream {
    compat?: ClientDownstreamVersionCompatability | undefined;
    userStatusUpdate?: NcUpdateSelfStatus | undefined;
    usersRequest?: NcGenericRequest | undefined;
    usersRelease?: NcGenericRelease | undefined;
    roomsRequest?: NcGenericRequest | undefined;
    roomRequestSingle?: NcRoomRequestSpecific | undefined;
    roomsRelease?: NcGenericRelease | undefined;
    objectsRequestAll?: NcGenericRequest | undefined;
    objectsRequestSet?: NcObjectRequestSet | undefined;
    objectsRequestSingle?: NcObjectRequestSpecific | undefined;
    objectsRelease?: NcGenericRelease | undefined;
    journalRequest?: NcRoomJournalRequest | undefined;
    journalRelease?: NcRoomJournalRelease | undefined;
    ping?: Ping | undefined;
}
declare const CommUpstream: {
    encode(message: CommUpstream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommUpstream;
    fromJSON(object: any): CommUpstream;
    toJSON(message: CommUpstream): unknown;
    fromPartial(object: DeepPartial$1<CommUpstream>): CommUpstream;
};
declare type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends Array<infer U> ? Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;

interface NsRoomJournalUpdate {
    v1?: NsRoomJournalUpdate_V1 | undefined;
}
declare const NsRoomJournalUpdate: {
    encode(message: NsRoomJournalUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomJournalUpdate;
    fromJSON(object: any): NsRoomJournalUpdate;
    toJSON(message: NsRoomJournalUpdate): unknown;
    fromPartial(object: DeepPartial<NsRoomJournalUpdate>): NsRoomJournalUpdate;
};
interface NsRoomJournalUpdate_V1 {
    roomId: string;
    journalEntries?: Journal;
}
declare const NsRoomJournalUpdate_V1: {
    encode(message: NsRoomJournalUpdate_V1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NsRoomJournalUpdate_V1;
    fromJSON(object: any): NsRoomJournalUpdate_V1;
    toJSON(message: NsRoomJournalUpdate_V1): unknown;
    fromPartial(object: DeepPartial<NsRoomJournalUpdate_V1>): NsRoomJournalUpdate_V1;
};
interface CommDownstream {
    compat?: ServerUpstreamVersionCompatability | undefined;
    connInfo?: ConnectionInfo | undefined;
    requestResponse?: NsRequestResponseStatus | undefined;
    serverMetadataUpdate?: NsServerMetadataUpdate | undefined;
    customerMetadataUpdate?: NsCustomerMetadataUpdate | undefined;
    userUpdate?: NsUserUpdate | undefined;
    userAdded?: NsUserAdded | undefined;
    userRemoved?: NsUserRemoved | undefined;
    userStatus?: NsUserConnectionStatus | undefined;
    roomUpdate?: NsRoomUpdate | undefined;
    roomMemberUpdate?: NsRoomMemberUpdate | undefined;
    roomRemoved?: NsRoomRemoved | undefined;
    roomMemberRemoved?: NsRoomMemberRemoved | undefined;
    objectUpdate?: NsObjectUpdate | undefined;
    objectMemberUpdate?: NsObjectMemberUpdate | undefined;
    objectDelete?: NsObjectDelete | undefined;
    objectMemberDelete?: NsObjectMemberDelete | undefined;
    journalUpdate?: NsRoomJournalUpdate | undefined;
    ping?: Ping | undefined;
    serverMessage?: GenericMessage | undefined;
}
declare const CommDownstream: {
    encode(message: CommDownstream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommDownstream;
    fromJSON(object: any): CommDownstream;
    toJSON(message: CommDownstream): unknown;
    fromPartial(object: DeepPartial<CommDownstream>): CommDownstream;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;

declare const socketnotify_d_ClientDownstreamVersionCompatability: typeof ClientDownstreamVersionCompatability;
declare const socketnotify_d_ClientDownstreamVersionCompatability_V1: typeof ClientDownstreamVersionCompatability_V1;
declare const socketnotify_d_CommDownstream: typeof CommDownstream;
declare const socketnotify_d_CommUpstream: typeof CommUpstream;
declare const socketnotify_d_ConnectionInfo: typeof ConnectionInfo;
declare const socketnotify_d_ConnectionInfo_V1: typeof ConnectionInfo_V1;
declare const socketnotify_d_NsRoomJournalUpdate: typeof NsRoomJournalUpdate;
declare const socketnotify_d_NsRoomJournalUpdate_V1: typeof NsRoomJournalUpdate_V1;
declare const socketnotify_d_ServerUpstreamVersionCompatability: typeof ServerUpstreamVersionCompatability;
declare const socketnotify_d_ServerUpstreamVersionCompatability_V1: typeof ServerUpstreamVersionCompatability_V1;
declare const socketnotify_d_protobufPackage: typeof protobufPackage;
declare namespace socketnotify_d {
  export {
    socketnotify_d_ClientDownstreamVersionCompatability as ClientDownstreamVersionCompatability,
    socketnotify_d_ClientDownstreamVersionCompatability_V1 as ClientDownstreamVersionCompatability_V1,
    socketnotify_d_CommDownstream as CommDownstream,
    socketnotify_d_CommUpstream as CommUpstream,
    socketnotify_d_ConnectionInfo as ConnectionInfo,
    socketnotify_d_ConnectionInfo_V1 as ConnectionInfo_V1,
    DeepPartial$1 as DeepPartial,
    socketnotify_d_NsRoomJournalUpdate as NsRoomJournalUpdate,
    socketnotify_d_NsRoomJournalUpdate_V1 as NsRoomJournalUpdate_V1,
    socketnotify_d_ServerUpstreamVersionCompatability as ServerUpstreamVersionCompatability,
    socketnotify_d_ServerUpstreamVersionCompatability_V1 as ServerUpstreamVersionCompatability_V1,
    socketnotify_d_protobufPackage as protobufPackage,
  };
}

interface NotifyConnSubSystem {
    refresh(): void;
    shutdown(): void;
    handle_message(msg: CommDownstream): void;
    readonly isActive: boolean;
}

interface NotifyDataUser {
    readonly userId: string;
    readonly email: string;
    readonly screenName: ReadonlyValue<string | undefined>;
    readonly firstName: ReadonlyValue<string | undefined>;
    readonly lastName: ReadonlyValue<string | undefined>;
    readonly pictureUrl: ReadonlyValue<string | undefined>;
    readonly location: ReadonlyValue<string | undefined>;
    readonly isGuest: boolean;
    readonly avatarData: ReadonlyValue<UserAvatarData | undefined>;
    readonly defaultRoomTemplates: ReadonlyValue<string[]>;
}
interface NotifySystemUsers extends NotifyConnSubSystem {
    readonly users: ValueMap<string, NotifyDataUser>;
    readonly connectedUser: ReadonlyValue<NotifyDataUser | undefined>;
    beginListening(): Promise<void>;
    endListening(): void;
}
declare function defaultNotifyDataUser(): NotifyDataUser;
declare class NotifySystemUsersImpl implements NotifySystemUsers {
    users: ValueMap<string, NotifyDataUser>;
    connectedUser: ReadonlyValue<NotifyDataUser | undefined>;
    isActive: boolean;
    private _notifyData;
    private _listeningCount;
    private _beginPromise;
    constructor(notifyData: NotifyConnectionInternal);
    beginListening(): Promise<void>;
    endListening(): void;
    refresh(): void;
    shutdown(): void;
    handle_message(msg: CommDownstream): void;
}

interface NotifyDataConnection {
    connectionId: string;
    userId: string;
    user: ReadonlyValue<NotifyDataUser | undefined>;
    sessionId: string;
    startTime: Date;
    statusCategory: ReadonlyValue<ClientStatus_ClientStatusCategory>;
    application: ReadonlyValue<ClientStatus_ConnectionApplication>;
    device: ReadonlyValue<ClientStatus_DeviceMode>;
    operatingSystem: ReadonlyValue<string>;
    unityDeviceCategory: ReadonlyValue<string>;
    lastChangeTime: ReadonlyValue<Date | undefined>;
}
interface NotifySystemConnections extends NotifyConnSubSystem {
    connections: ValueMap<string, NotifyDataConnection>;
}
declare class NotifySystemConnectionsImpl implements NotifySystemConnections {
    connections: ValueMap<string, NotifyDataConnection>;
    isActive: boolean;
    private _notifyData;
    constructor(notifyData: NotifyConnectionData);
    refresh(): void;
    shutdown(): void;
    handle_message(msg: CommDownstream): void;
}

interface NotifyDataRoomMember {
    readonly id: string;
    readonly email: string;
    readonly joinStatus: ReadonlyValue<RoomMemberMetadata_JoinStatus>;
    readonly inviteDate: Date | undefined;
    readonly lastAccess: ReadonlyValue<Date | undefined>;
    readonly hidden: ReadonlyValue<boolean>;
    readonly userCategory: ReadonlyValue<string>;
    readonly userSort: ReadonlyValue<number>;
    readonly user: ReadonlyValue<NotifyDataUser | undefined>;
}
interface NotifyDataRoom {
    readonly id: string;
    readonly ownerId: ReadonlyValue<string | undefined>;
    readonly name: ReadonlyValue<string | undefined>;
    readonly description: ReadonlyValue<string | undefined>;
    readonly createdAt: Date | undefined;
    readonly modifiedAt: ReadonlyValue<Date | undefined>;
    readonly members: ReadonlyValueMap<string, NotifyDataRoomMember>;
    readonly activeConnections: ReadonlyValueMap<string, NotifyDataConnection>;
    readonly selfMembership: ReadonlyValue<NotifyDataRoomMember | undefined>;
    readonly roomUserCategory: ReadonlyValue<string>;
    readonly roomUserSort: ReadonlyValue<number>;
    readonly thumbnailUrl: ReadonlyValue<string>;
    readonly watermarkEnabled: ReadonlyValue<boolean>;
}
interface NotifySystemRooms extends NotifyConnSubSystem {
    readonly rooms: ReadonlyValueMap<string, NotifyDataRoom>;
    beginListening(): Promise<void>;
    endListening(): void;
}
declare function defaultNotifyDataRoom(): NotifyDataRoom;
declare function defaultNotifyDataRoomMember(): NotifyDataRoomMember;
declare class NotifySystemRoomsImpl implements NotifySystemRooms {
    private _rooms;
    get rooms(): ReadonlyValueMap<string, NotifyDataRoom>;
    isActive: boolean;
    private _notifyData;
    private _listeningCount;
    private _beginPromise;
    constructor(notifyData: NotifyConnectionInternal);
    beginListening(): Promise<void>;
    endListening(): void;
    refresh(): void;
    shutdown(): void;
    handle_message(msg: CommDownstream): void;
    updateMemberOf(u: NotifyDataRoom, mem: RoomMemberMetadata): void;
}

interface NotifyDataObjectMember {
    readonly entityId: string | undefined;
    readonly entityType: ObjectMemberEntityType;
    readonly access: ReadonlyValue<ObjectMemberAccess>;
    readonly lastUsage: ReadonlyValue<Date | undefined>;
    readonly userSet: ReadonlyValue<string | undefined>;
    readonly userCategory: ReadonlyValue<string | undefined>;
    readonly userSort: ReadonlyValue<number>;
    readonly quickaccess: ReadonlyValue<boolean>;
}
interface NotifyDataObject {
    readonly id: string;
    readonly creatorUserId: string | undefined;
    readonly customerId: string | undefined;
    readonly category: ReadonlyValue<ObjectCategoryEnum>;
    readonly filename: string;
    readonly name: string;
    readonly creationTime: Date;
    readonly sourceMd5Hash: string;
    readonly usage: ObjectUsageEnum;
    readonly instanceOfObject: string | undefined;
    readonly assets: ReadonlyValueMap<ObjectAssetData_ObjectAssetCategoryEnum, ObjectAssetData | undefined>;
    readonly thumbnail: ReadonlyValue<ObjectContentData | undefined>;
    readonly importSource: ReadonlyValue<ObjectImportContentData | undefined>;
    readonly holoMetadata: ReadonlyValue<HoloObjectMetadata | undefined>;
    readonly scriptMetadata: ReadonlyValue<ScriptObjectMetadata | undefined>;
    readonly metadata: ReadonlyValueMap<string, string>;
    readonly members: ReadonlyValueMap<string, NotifyDataObjectMember>;
}
interface NotifySystemObjects extends NotifyConnSubSystem {
    readonly objects: ReadonlyValueMap<string, NotifyDataObject>;
    beginListening(): Promise<void>;
    endListening(): void;
    requestObject(id: string): Promise<NotifyDataObject>;
}
declare function defaultNotifyDataObject(): NotifyDataObject;
declare class NotifySystemObjectsImpl implements NotifySystemObjects {
    private _objects;
    get objects(): ReadonlyValueMap<string, NotifyDataObject>;
    private _requests;
    isActive: boolean;
    private _notifyData;
    private _listeningCount;
    private _beginPromise;
    constructor(notifyData: NotifyConnectionInternal);
    beginListening(): Promise<void>;
    endListening(): void;
    requestObject(id: string): Promise<NotifyDataObject>;
    refresh(): void;
    shutdown(): void;
    handle_message(msg: CommDownstream): void;
    updateMemberOf(o: NotifyDataObject, mem: ObjectMember): void;
}

interface NotifyDataJournal {
    readonly roomId: string;
    readonly journal: ReadonlyValueMap<Date, JournalEntry>;
}
interface NotifySystemJournals extends NotifyConnSubSystem {
    readonly journals: ReadonlyValueMap<string, NotifyDataJournal>;
    requestJournal(roomId: string, opIds: number[]): Promise<NotifyDataJournal>;
    releaseJournal(roomId: string, opIds: number[]): void;
}

interface NotifyConnectionData {
    readonly api: CavrnusApiUser;
    readonly connectionStatus: ReadonlyValue<ConnectionStatus>;
    readonly connectionId: ReadonlyValue<string>;
    readonly userId: ReadonlyValue<string>;
    readonly connections: NotifySystemConnections;
    readonly users: NotifySystemUsers;
    readonly rooms: NotifySystemRooms;
    readonly objects: NotifySystemObjects;
    readonly journals: NotifySystemJournals;
    readonly serverMetadata: ReadonlyValue<Partial<ServerMetadata>>;
    readonly customerMetadata: ReadonlyValue<Partial<CustomerProfileInfo>>;
    awaitConnInit(): Promise<void>;
}
interface NotifyConnection extends NotifyConnectionData {
    readonly providePresence: boolean;
    readonly onDisconnected: ISimpleEvent<Error | undefined>;
    disconnect(): void;
}
interface NotifyConnectionInternal extends NotifyConnectionData {
    send(up: CommUpstream): void;
    registerRequest(responseCb: (res: NsRequestResponseStatus_V1) => void): number;
}
declare function connectNotify(api: CavrnusApiUser, providePresence: boolean): Promise<NotifyConnection>;

type index_d$1_NotifyConnSubSystem = NotifyConnSubSystem;
type index_d$1_NotifyConnection = NotifyConnection;
type index_d$1_NotifyConnectionData = NotifyConnectionData;
type index_d$1_NotifyConnectionInternal = NotifyConnectionInternal;
type index_d$1_NotifyDataConnection = NotifyDataConnection;
type index_d$1_NotifyDataObject = NotifyDataObject;
type index_d$1_NotifyDataObjectMember = NotifyDataObjectMember;
type index_d$1_NotifyDataRoom = NotifyDataRoom;
type index_d$1_NotifyDataRoomMember = NotifyDataRoomMember;
type index_d$1_NotifyDataUser = NotifyDataUser;
type index_d$1_NotifySystemConnections = NotifySystemConnections;
type index_d$1_NotifySystemConnectionsImpl = NotifySystemConnectionsImpl;
declare const index_d$1_NotifySystemConnectionsImpl: typeof NotifySystemConnectionsImpl;
type index_d$1_NotifySystemObjects = NotifySystemObjects;
type index_d$1_NotifySystemObjectsImpl = NotifySystemObjectsImpl;
declare const index_d$1_NotifySystemObjectsImpl: typeof NotifySystemObjectsImpl;
type index_d$1_NotifySystemRooms = NotifySystemRooms;
type index_d$1_NotifySystemRoomsImpl = NotifySystemRoomsImpl;
declare const index_d$1_NotifySystemRoomsImpl: typeof NotifySystemRoomsImpl;
type index_d$1_NotifySystemUsers = NotifySystemUsers;
type index_d$1_NotifySystemUsersImpl = NotifySystemUsersImpl;
declare const index_d$1_NotifySystemUsersImpl: typeof NotifySystemUsersImpl;
type index_d$1_ProtoWebsocket<TUp, TDown> = ProtoWebsocket<TUp, TDown>;
declare const index_d$1_ProtoWebsocket: typeof ProtoWebsocket;
type index_d$1_ProtobufType<Protobuf> = ProtobufType<Protobuf>;
type index_d$1_SessionConnection = SessionConnection;
type index_d$1_SessionConnectionImpl = SessionConnectionImpl;
declare const index_d$1_SessionConnectionImpl: typeof SessionConnectionImpl;
type index_d$1_SessionConnectionInternal = SessionConnectionInternal;
type index_d$1_SessionConnectionRecvFullJournal = SessionConnectionRecvFullJournal;
type index_d$1_SessionSystemJournal = SessionSystemJournal;
type index_d$1_SessionSystemJournalImpl = SessionSystemJournalImpl;
declare const index_d$1_SessionSystemJournalImpl: typeof SessionSystemJournalImpl;
type index_d$1_SessionSystemRtc = SessionSystemRtc;
type index_d$1_SessionSystemRtcImpl = SessionSystemRtcImpl;
declare const index_d$1_SessionSystemRtcImpl: typeof SessionSystemRtcImpl;
type index_d$1_SessionSystemUsers = SessionSystemUsers;
type index_d$1_SessionSystemUsersImpl = SessionSystemUsersImpl;
declare const index_d$1_SessionSystemUsersImpl: typeof SessionSystemUsersImpl;
type index_d$1_SessionUser = SessionUser;
type index_d$1_UserDevice = UserDevice;
declare const index_d$1_connectNotify: typeof connectNotify;
declare const index_d$1_connectSession: typeof connectSession;
declare const index_d$1_defaultNotifyDataObject: typeof defaultNotifyDataObject;
declare const index_d$1_defaultNotifyDataRoom: typeof defaultNotifyDataRoom;
declare const index_d$1_defaultNotifyDataRoomMember: typeof defaultNotifyDataRoomMember;
declare const index_d$1_defaultNotifyDataUser: typeof defaultNotifyDataUser;
declare const index_d$1_sessionUserDisplayName: typeof sessionUserDisplayName;
declare const index_d$1_userProfileDisplayName: typeof userProfileDisplayName;
declare namespace index_d$1 {
  export {
    index_d$1_NotifyConnSubSystem as NotifyConnSubSystem,
    index_d$1_NotifyConnection as NotifyConnection,
    index_d$1_NotifyConnectionData as NotifyConnectionData,
    index_d$1_NotifyConnectionInternal as NotifyConnectionInternal,
    index_d$1_NotifyDataConnection as NotifyDataConnection,
    index_d$1_NotifyDataObject as NotifyDataObject,
    index_d$1_NotifyDataObjectMember as NotifyDataObjectMember,
    index_d$1_NotifyDataRoom as NotifyDataRoom,
    index_d$1_NotifyDataRoomMember as NotifyDataRoomMember,
    index_d$1_NotifyDataUser as NotifyDataUser,
    index_d$1_NotifySystemConnections as NotifySystemConnections,
    index_d$1_NotifySystemConnectionsImpl as NotifySystemConnectionsImpl,
    index_d$1_NotifySystemObjects as NotifySystemObjects,
    index_d$1_NotifySystemObjectsImpl as NotifySystemObjectsImpl,
    index_d$1_NotifySystemRooms as NotifySystemRooms,
    index_d$1_NotifySystemRoomsImpl as NotifySystemRoomsImpl,
    index_d$1_NotifySystemUsers as NotifySystemUsers,
    index_d$1_NotifySystemUsersImpl as NotifySystemUsersImpl,
    index_d$1_ProtoWebsocket as ProtoWebsocket,
    index_d$1_ProtobufType as ProtobufType,
    index_d$1_SessionConnection as SessionConnection,
    index_d$1_SessionConnectionImpl as SessionConnectionImpl,
    index_d$1_SessionConnectionInternal as SessionConnectionInternal,
    index_d$1_SessionConnectionRecvFullJournal as SessionConnectionRecvFullJournal,
    index_d$1_SessionSystemJournal as SessionSystemJournal,
    index_d$1_SessionSystemJournalImpl as SessionSystemJournalImpl,
    index_d$1_SessionSystemRtc as SessionSystemRtc,
    index_d$1_SessionSystemRtcImpl as SessionSystemRtcImpl,
    index_d$1_SessionSystemUsers as SessionSystemUsers,
    index_d$1_SessionSystemUsersImpl as SessionSystemUsersImpl,
    index_d$1_SessionUser as SessionUser,
    index_d$1_UserDevice as UserDevice,
    index_d$1_connectNotify as connectNotify,
    index_d$1_connectSession as connectSession,
    index_d$1_defaultNotifyDataObject as defaultNotifyDataObject,
    index_d$1_defaultNotifyDataRoom as defaultNotifyDataRoom,
    index_d$1_defaultNotifyDataRoomMember as defaultNotifyDataRoomMember,
    index_d$1_defaultNotifyDataUser as defaultNotifyDataUser,
    index_d$1_sessionUserDisplayName as sessionUserDisplayName,
    index_d$1_userProfileDisplayName as userProfileDisplayName,
  };
}

declare const transient_events_d_EvRequestFollowUser: typeof EvRequestFollowUser;
declare const transient_events_d_EvRequestFollowUser_V1: typeof EvRequestFollowUser_V1;
declare const transient_events_d_EvRequestMuteUser: typeof EvRequestMuteUser;
declare const transient_events_d_EvRequestMuteUser_V1: typeof EvRequestMuteUser_V1;
declare const transient_events_d_EvRequestUserStream: typeof EvRequestUserStream;
declare const transient_events_d_EvRequestUserStream_V1: typeof EvRequestUserStream_V1;
type transient_events_d_EvRequestUserStream_V1_StreamRequestOption = EvRequestUserStream_V1_StreamRequestOption;
declare const transient_events_d_EvRequestUserStream_V1_StreamRequestOption: typeof EvRequestUserStream_V1_StreamRequestOption;
declare const transient_events_d_EvTransientJournalUpdate: typeof EvTransientJournalUpdate;
declare const transient_events_d_EvTransientJournalUpdateCancellation: typeof EvTransientJournalUpdateCancellation;
declare const transient_events_d_EvTransientJournalUpdateCancellation_V1: typeof EvTransientJournalUpdateCancellation_V1;
declare const transient_events_d_EvTransientJournalUpdate_V1: typeof EvTransientJournalUpdate_V1;
declare const transient_events_d_EvUserClaimedObjectsState: typeof EvUserClaimedObjectsState;
declare const transient_events_d_EvUserClaimedObjectsState_V1: typeof EvUserClaimedObjectsState_V1;
declare const transient_events_d_EvUserCommPing: typeof EvUserCommPing;
declare const transient_events_d_EvUserCommPing_V1: typeof EvUserCommPing_V1;
declare const transient_events_d_EvUserDeviceState: typeof EvUserDeviceState;
declare const transient_events_d_EvUserDeviceState_V1: typeof EvUserDeviceState_V1;
declare const transient_events_d_EvUserEntry: typeof EvUserEntry;
declare const transient_events_d_EvUserEntry_V1: typeof EvUserEntry_V1;
declare const transient_events_d_EvUserExit: typeof EvUserExit;
declare const transient_events_d_EvUserExit_V1: typeof EvUserExit_V1;
declare const transient_events_d_EvUserMuteState: typeof EvUserMuteState;
declare const transient_events_d_EvUserMuteState_V1: typeof EvUserMuteState_V1;
declare const transient_events_d_EvUserStreamState: typeof EvUserStreamState;
declare const transient_events_d_EvUserStreamState_V1: typeof EvUserStreamState_V1;
type transient_events_d_EvUserStreamState_V1_StreamStateMode = EvUserStreamState_V1_StreamStateMode;
declare const transient_events_d_EvUserStreamState_V1_StreamStateMode: typeof EvUserStreamState_V1_StreamStateMode;
declare const transient_events_d_EvUserStreamState_V2: typeof EvUserStreamState_V2;
declare const transient_events_d_evRequestUserStream_V1_StreamRequestOptionFromJSON: typeof evRequestUserStream_V1_StreamRequestOptionFromJSON;
declare const transient_events_d_evRequestUserStream_V1_StreamRequestOptionToJSON: typeof evRequestUserStream_V1_StreamRequestOptionToJSON;
declare const transient_events_d_evUserStreamState_V1_StreamStateModeFromJSON: typeof evUserStreamState_V1_StreamStateModeFromJSON;
declare const transient_events_d_evUserStreamState_V1_StreamStateModeToJSON: typeof evUserStreamState_V1_StreamStateModeToJSON;
declare namespace transient_events_d {
  export {
    DeepPartial$5 as DeepPartial,
    transient_events_d_EvRequestFollowUser as EvRequestFollowUser,
    transient_events_d_EvRequestFollowUser_V1 as EvRequestFollowUser_V1,
    transient_events_d_EvRequestMuteUser as EvRequestMuteUser,
    transient_events_d_EvRequestMuteUser_V1 as EvRequestMuteUser_V1,
    transient_events_d_EvRequestUserStream as EvRequestUserStream,
    transient_events_d_EvRequestUserStream_V1 as EvRequestUserStream_V1,
    transient_events_d_EvRequestUserStream_V1_StreamRequestOption as EvRequestUserStream_V1_StreamRequestOption,
    transient_events_d_EvTransientJournalUpdate as EvTransientJournalUpdate,
    transient_events_d_EvTransientJournalUpdateCancellation as EvTransientJournalUpdateCancellation,
    transient_events_d_EvTransientJournalUpdateCancellation_V1 as EvTransientJournalUpdateCancellation_V1,
    transient_events_d_EvTransientJournalUpdate_V1 as EvTransientJournalUpdate_V1,
    transient_events_d_EvUserClaimedObjectsState as EvUserClaimedObjectsState,
    transient_events_d_EvUserClaimedObjectsState_V1 as EvUserClaimedObjectsState_V1,
    transient_events_d_EvUserCommPing as EvUserCommPing,
    transient_events_d_EvUserCommPing_V1 as EvUserCommPing_V1,
    transient_events_d_EvUserDeviceState as EvUserDeviceState,
    transient_events_d_EvUserDeviceState_V1 as EvUserDeviceState_V1,
    transient_events_d_EvUserEntry as EvUserEntry,
    transient_events_d_EvUserEntry_V1 as EvUserEntry_V1,
    transient_events_d_EvUserExit as EvUserExit,
    transient_events_d_EvUserExit_V1 as EvUserExit_V1,
    transient_events_d_EvUserMuteState as EvUserMuteState,
    transient_events_d_EvUserMuteState_V1 as EvUserMuteState_V1,
    transient_events_d_EvUserStreamState as EvUserStreamState,
    transient_events_d_EvUserStreamState_V1 as EvUserStreamState_V1,
    transient_events_d_EvUserStreamState_V1_StreamStateMode as EvUserStreamState_V1_StreamStateMode,
    transient_events_d_EvUserStreamState_V2 as EvUserStreamState_V2,
    transient_events_d_evRequestUserStream_V1_StreamRequestOptionFromJSON as evRequestUserStream_V1_StreamRequestOptionFromJSON,
    transient_events_d_evRequestUserStream_V1_StreamRequestOptionToJSON as evRequestUserStream_V1_StreamRequestOptionToJSON,
    transient_events_d_evUserStreamState_V1_StreamStateModeFromJSON as evUserStreamState_V1_StreamStateModeFromJSON,
    transient_events_d_evUserStreamState_V1_StreamStateModeToJSON as evUserStreamState_V1_StreamStateModeToJSON,
    protobufPackage$2 as protobufPackage,
  };
}

declare namespace index_d {
  export {
    common_d as Common,
    journal_d as Journal,
    journaldata_d as JournalData,
    journal_operations_d as JournalOperations,
    notify_events_d as NotifyEvents,
    serverdata_d as ServerData,
    socketcomm_d as SocketComm,
    socketnotify_d as SocketNotify,
    transient_d as Transient,
    transient_events_d as TransientEvents,
  };
}

export { index_d$4 as Api, index_d$1 as Conn, index_d$2 as LiveJournal, index_d as Proto, index_d$3 as V };
