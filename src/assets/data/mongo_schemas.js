The schema:  Schema {
  obj: 
   { basket_data: { type: [Object], required: true },
     createdAt: { type: [Function: Date], default: [Function: now] },
     updatedAt: { type: [Function: Date], default: [Function: now] } },
  paths: 
   { basket_data: 
      Mixed {
        path: 'basket_data',
        instance: 'Mixed',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     createdAt: 
      SchemaDate {
        path: 'createdAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     updatedAt: 
      SchemaDate {
        path: 'updatedAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     _id: 
      ObjectId {
        path: '_id',
        instance: 'ObjectID',
        validators: [],
        setters: [Array],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: defaultId] } },
  aliases: {},
  subpaths: {},
  virtuals: {},
  singleNestedPaths: {},
  nested: {},
  inherits: {},
  callQueue: [ [ 'pre', [Object] ] ],
  _indexes: [],
  methods: {},
  statics: {},
  tree: 
   { basket_data: { required: true, type: [Object] },
     createdAt: { default: [Function: now], type: [Function: Date] },
     updatedAt: { default: [Function: now], type: [Function: Date] },
     _id: { type: [Object], auto: true } },
  query: {},
  childSchemas: [],
  plugins: [],
  s: 
   { hooks: Kareem { _pres: {}, _posts: {} },
     kareemHooks: 
      { aggregate: true,
        count: true,
        find: true,
        findOne: true,
        findOneAndUpdate: true,
        findOneAndRemove: true,
        insertMany: true,
        replaceOne: true,
        update: true,
        updateMany: true,
        updateOne: true } },
  _userProvidedOptions: undefined,
  options: 
   { retainKeyOrder: false,
     typeKey: 'type',
     id: true,
     noVirtualId: false,
     _id: true,
     noId: false,
     validateBeforeSave: true,
     read: null,
     shardKey: null,
     autoIndex: null,
     minimize: true,
     discriminatorKey: '__t',
     versionKey: '__v',
     capped: false,
     bufferCommands: true,
     strict: true } }
The schema:  Schema {
  obj: 
   { UID: { type: [Function: Number] },
     UPC: { type: [Function: Number] },
     CLS: { type: [Function: Number] },
     VNDR: { type: [Function: Number] },
     STY: { type: [Function: Number] },
     CLR: { type: [Function: Number] },
     SIZE: { type: [Function: Number] },
     SHORTSKU: { type: [Function: Number] },
     createdAt: { type: [Function: Date], default: [Function: now] },
     updatedAt: { type: [Function: Date], default: [Function: now] } },
  paths: 
   { UID: 
      SchemaNumber {
        path: 'UID',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     UPC: 
      SchemaNumber {
        path: 'UPC',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     CLS: 
      SchemaNumber {
        path: 'CLS',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     VNDR: 
      SchemaNumber {
        path: 'VNDR',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     STY: 
      SchemaNumber {
        path: 'STY',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     CLR: 
      SchemaNumber {
        path: 'CLR',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SIZE: 
      SchemaNumber {
        path: 'SIZE',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SHORTSKU: 
      SchemaNumber {
        path: 'SHORTSKU',
        instance: 'Number',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     createdAt: 
      SchemaDate {
        path: 'createdAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     updatedAt: 
      SchemaDate {
        path: 'updatedAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     _id: 
      ObjectId {
        path: '_id',
        instance: 'ObjectID',
        validators: [],
        setters: [Array],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: defaultId] } },
  aliases: {},
  subpaths: {},
  virtuals: {},
  singleNestedPaths: {},
  nested: {},
  inherits: {},
  callQueue: [ [ 'pre', [Object] ] ],
  _indexes: [],
  methods: {},
  statics: {},
  tree: 
   { UID: { type: [Function: Number] },
     UPC: { type: [Function: Number] },
     CLS: { type: [Function: Number] },
     VNDR: { type: [Function: Number] },
     STY: { type: [Function: Number] },
     CLR: { type: [Function: Number] },
     SIZE: { type: [Function: Number] },
     SHORTSKU: { type: [Function: Number] },
     createdAt: { default: [Function: now], type: [Function: Date] },
     updatedAt: { default: [Function: now], type: [Function: Date] },
     _id: { type: [Object], auto: true } },
  query: {},
  childSchemas: [],
  plugins: [],
  s: 
   { hooks: Kareem { _pres: {}, _posts: {} },
     kareemHooks: 
      { aggregate: true,
        count: true,
        find: true,
        findOne: true,
        findOneAndUpdate: true,
        findOneAndRemove: true,
        insertMany: true,
        replaceOne: true,
        update: true,
        updateMany: true,
        updateOne: true } },
  _userProvidedOptions: undefined,
  options: 
   { retainKeyOrder: false,
     typeKey: 'type',
     id: true,
     noVirtualId: false,
     _id: true,
     noId: false,
     validateBeforeSave: true,
     read: null,
     shardKey: null,
     autoIndex: null,
     minimize: true,
     discriminatorKey: '__t',
     versionKey: '__v',
     capped: false,
     bufferCommands: true,
     strict: true } }
The schema:  Schema {
  obj: 
   { Model: { type: [Function: String] },
     Manufacturer: { type: [Function: String] },
     ManufacturerModel: { type: [Function: String] },
     Mpn: { type: [Function: String] },
     Upc: { type: [Function: String] },
     MerchantCategory: { type: [Function: String] },
     Brand: { type: [Function: String] },
     OfferName: { type: [Function: String] },
     OfferDescription: { type: [Function: String] },
     ActionURL: { type: [Function: String] },
     ProductCost: { type: [Function: String] },
     ProductMargin: { type: [Function: String] },
     Quantity: { type: [Function: String] },
     IP_DIVISION: { type: [Function: String] },
     IP_DEPT: { type: [Function: String] },
     IP_SUBDEPT: { type: [Function: String] },
     IP_CLASS: { type: [Function: String] },
     IP_STYLE: { type: [Function: String] },
     PACSUN_EXCLUSIVE: { type: [Function: String] },
     ONLINE_EXCLUSIVE: { type: [Function: String] },
     MARGIN_RETAIL: { type: [Function: String] },
     Active: { type: [Function: Boolean], default: false },
     IMAGE_VIEWS: { type: [Function: String] },
     PARENT_SKU: { type: [Function: String] },
     NEWITEMDATE: { type: [Function: String] },
     COLOR_NAME: { type: [Function: String] },
     COLOR_CODE: { type: [Function: String] },
     SIZE_NAME: { type: [Function: String] },
     SIZE_CODE: { type: [Function: String] },
     SIZE_LENGTH: { type: [Function: String] },
     SIZE_WIDTH: { type: [Function: String] },
     SIZE_HEIGHT: { type: [Function: String] },
     WEIGHT: { type: [Function: String] },
     MERCHCLASSNUMBER: { type: [Function: String] },
     MERCHVENDORNUMBER: { type: [Function: String] },
     MERCHSTYLENUMBER: { type: [Function: String] },
     RegularPrice: { type: [Function: String] },
     CurrentPrice: { type: [Function: String] },
     PromoPrice: { type: [Function: String] },
     InStock: { type: [Function: String] },
     ReferenceImageURL: { type: [Function: String] },
     ITEMIMAGEURL1: { type: [Function: String] },
     ITEMIMAGEURL2: { type: [Function: String] },
     ITEMIMAGEURL3: { type: [Function: String] },
     ITEMIMAGEURL4: { type: [Function: String] },
     ITEMIMAGEURL5: { type: [Function: String] },
     createdAt: { type: [Function: Date], default: [Function: now] },
     updatedAt: { type: [Function: Date], default: [Function: now] } },
  paths: 
   { Model: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'Model',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     Manufacturer: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'Manufacturer',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ManufacturerModel: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ManufacturerModel',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     Mpn: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'Mpn',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     Upc: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'Upc',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     MerchantCategory: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'MerchantCategory',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     Brand: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'Brand',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     OfferName: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'OfferName',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     OfferDescription: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'OfferDescription',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ActionURL: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ActionURL',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ProductCost: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ProductCost',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ProductMargin: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ProductMargin',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     Quantity: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'Quantity',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     IP_DIVISION: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'IP_DIVISION',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     IP_DEPT: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'IP_DEPT',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     IP_SUBDEPT: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'IP_SUBDEPT',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     IP_CLASS: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'IP_CLASS',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     IP_STYLE: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'IP_STYLE',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     PACSUN_EXCLUSIVE: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'PACSUN_EXCLUSIVE',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ONLINE_EXCLUSIVE: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ONLINE_EXCLUSIVE',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     MARGIN_RETAIL: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'MARGIN_RETAIL',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     Active: 
      SchemaBoolean {
        path: 'Active',
        instance: 'Boolean',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: false },
     IMAGE_VIEWS: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'IMAGE_VIEWS',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     PARENT_SKU: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'PARENT_SKU',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     NEWITEMDATE: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'NEWITEMDATE',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     COLOR_NAME: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'COLOR_NAME',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     COLOR_CODE: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'COLOR_CODE',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SIZE_NAME: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'SIZE_NAME',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SIZE_CODE: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'SIZE_CODE',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SIZE_LENGTH: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'SIZE_LENGTH',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SIZE_WIDTH: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'SIZE_WIDTH',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     SIZE_HEIGHT: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'SIZE_HEIGHT',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     WEIGHT: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'WEIGHT',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     MERCHCLASSNUMBER: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'MERCHCLASSNUMBER',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     MERCHVENDORNUMBER: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'MERCHVENDORNUMBER',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     MERCHSTYLENUMBER: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'MERCHSTYLENUMBER',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     RegularPrice: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'RegularPrice',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     CurrentPrice: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'CurrentPrice',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     PromoPrice: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'PromoPrice',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     InStock: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'InStock',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ReferenceImageURL: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ReferenceImageURL',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ITEMIMAGEURL1: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ITEMIMAGEURL1',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ITEMIMAGEURL2: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ITEMIMAGEURL2',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ITEMIMAGEURL3: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ITEMIMAGEURL3',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ITEMIMAGEURL4: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ITEMIMAGEURL4',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     ITEMIMAGEURL5: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'ITEMIMAGEURL5',
        instance: 'String',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null },
     createdAt: 
      SchemaDate {
        path: 'createdAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     updatedAt: 
      SchemaDate {
        path: 'updatedAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     _id: 
      ObjectId {
        path: '_id',
        instance: 'ObjectID',
        validators: [],
        setters: [Array],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: defaultId] } },
  aliases: {},
  subpaths: {},
  virtuals: {},
  singleNestedPaths: {},
  nested: {},
  inherits: {},
  callQueue: [ [ 'pre', [Object] ] ],
  _indexes: [],
  methods: {},
  statics: {},
  tree: 
   { Model: { type: [Function: String] },
     Manufacturer: { type: [Function: String] },
     ManufacturerModel: { type: [Function: String] },
     Mpn: { type: [Function: String] },
     Upc: { type: [Function: String] },
     MerchantCategory: { type: [Function: String] },
     Brand: { type: [Function: String] },
     OfferName: { type: [Function: String] },
     OfferDescription: { type: [Function: String] },
     ActionURL: { type: [Function: String] },
     ProductCost: { type: [Function: String] },
     ProductMargin: { type: [Function: String] },
     Quantity: { type: [Function: String] },
     IP_DIVISION: { type: [Function: String] },
     IP_DEPT: { type: [Function: String] },
     IP_SUBDEPT: { type: [Function: String] },
     IP_CLASS: { type: [Function: String] },
     IP_STYLE: { type: [Function: String] },
     PACSUN_EXCLUSIVE: { type: [Function: String] },
     ONLINE_EXCLUSIVE: { type: [Function: String] },
     MARGIN_RETAIL: { type: [Function: String] },
     Active: { default: false, type: [Function: Boolean] },
     IMAGE_VIEWS: { type: [Function: String] },
     PARENT_SKU: { type: [Function: String] },
     NEWITEMDATE: { type: [Function: String] },
     COLOR_NAME: { type: [Function: String] },
     COLOR_CODE: { type: [Function: String] },
     SIZE_NAME: { type: [Function: String] },
     SIZE_CODE: { type: [Function: String] },
     SIZE_LENGTH: { type: [Function: String] },
     SIZE_WIDTH: { type: [Function: String] },
     SIZE_HEIGHT: { type: [Function: String] },
     WEIGHT: { type: [Function: String] },
     MERCHCLASSNUMBER: { type: [Function: String] },
     MERCHVENDORNUMBER: { type: [Function: String] },
     MERCHSTYLENUMBER: { type: [Function: String] },
     RegularPrice: { type: [Function: String] },
     CurrentPrice: { type: [Function: String] },
     PromoPrice: { type: [Function: String] },
     InStock: { type: [Function: String] },
     ReferenceImageURL: { type: [Function: String] },
     ITEMIMAGEURL1: { type: [Function: String] },
     ITEMIMAGEURL2: { type: [Function: String] },
     ITEMIMAGEURL3: { type: [Function: String] },
     ITEMIMAGEURL4: { type: [Function: String] },
     ITEMIMAGEURL5: { type: [Function: String] },
     createdAt: { default: [Function: now], type: [Function: Date] },
     updatedAt: { default: [Function: now], type: [Function: Date] },
     _id: { type: [Object], auto: true } },
  query: {},
  childSchemas: [],
  plugins: [],
  s: 
   { hooks: Kareem { _pres: {}, _posts: {} },
     kareemHooks: 
      { aggregate: true,
        count: true,
        find: true,
        findOne: true,
        findOneAndUpdate: true,
        findOneAndRemove: true,
        insertMany: true,
        replaceOne: true,
        update: true,
        updateMany: true,
        updateOne: true } },
  _userProvidedOptions: undefined,
  options: 
   { retainKeyOrder: false,
     typeKey: 'type',
     id: true,
     noVirtualId: false,
     _id: true,
     noId: false,
     validateBeforeSave: true,
     read: null,
     shardKey: null,
     autoIndex: null,
     minimize: true,
     discriminatorKey: '__t',
     versionKey: '__v',
     capped: false,
     bufferCommands: true,
     strict: true } }
The schema:  Schema {
  obj: 
   { orderId: { type: [Function: String], required: true },
     transactionId: { type: [Function: String], required: true },
     associateId: { type: [Function: String], required: true },
     storeNumber: { type: [Function: String], required: true },
     productItems: { type: [Function: Array], required: true },
     orderPriceAdjustments: { type: [Function: Array], required: false },
     customerEmail: { type: [Function: String], required: true },
     customerName: { type: [Function: String], required: true },
     createdAt: { type: [Function: Date], default: [Function: now] },
     updatedAt: { type: [Function: Date], default: [Function: now] } },
  paths: 
   { orderId: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'orderId',
        instance: 'String',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     transactionId: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'transactionId',
        instance: 'String',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     associateId: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'associateId',
        instance: 'String',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     storeNumber: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'storeNumber',
        instance: 'String',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     productItems: 
      SchemaArray {
        casterConstructor: [Object],
        caster: [Object],
        '$isMongooseArray': true,
        path: 'productItems',
        instance: 'Array',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true,
        defaultValue: [Function] },
     orderPriceAdjustments: 
      SchemaArray {
        casterConstructor: [Object],
        caster: [Object],
        '$isMongooseArray': true,
        path: 'orderPriceAdjustments',
        instance: 'Array',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: false,
        defaultValue: [Function] },
     customerEmail: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'customerEmail',
        instance: 'String',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     customerName: 
      SchemaString {
        enumValues: [],
        regExp: null,
        path: 'customerName',
        instance: 'String',
        validators: [Array],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        isRequired: true,
        requiredValidator: [Function],
        originalRequiredValue: true },
     createdAt: 
      SchemaDate {
        path: 'createdAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     updatedAt: 
      SchemaDate {
        path: 'updatedAt',
        instance: 'Date',
        validators: [],
        setters: [],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: now] },
     _id: 
      ObjectId {
        path: '_id',
        instance: 'ObjectID',
        validators: [],
        setters: [Array],
        getters: [],
        options: [Object],
        _index: null,
        defaultValue: [Function: defaultId] } },
  aliases: {},
  subpaths: {},
  virtuals: {},
  singleNestedPaths: {},
  nested: {},
  inherits: {},
  callQueue: [ [ 'pre', [Object] ] ],
  _indexes: [],
  methods: {},
  statics: {},
  tree: 
   { orderId: { required: true, type: [Function: String] },
     transactionId: { required: true, type: [Function: String] },
     associateId: { required: true, type: [Function: String] },
     storeNumber: { required: true, type: [Function: String] },
     productItems: { required: true, type: [Function: Array] },
     orderPriceAdjustments: { required: false, type: [Function: Array] },
     customerEmail: { required: true, type: [Function: String] },
     customerName: { required: true, type: [Function: String] },
     createdAt: { default: [Function: now], type: [Function: Date] },
     updatedAt: { default: [Function: now], type: [Function: Date] },
     _id: { type: [Object], auto: true } },
  query: {},
  childSchemas: [],
  plugins: [],
  s: 
   { hooks: Kareem { _pres: {}, _posts: {} },
     kareemHooks: 
      { aggregate: true,
        count: true,
        find: true,
        findOne: true,
        findOneAndUpdate: true,
        findOneAndRemove: true,
        insertMany: true,
        replaceOne: true,
        update: true,
        updateMany: true,
        updateOne: true } },
  _userProvidedOptions: undefined,
  options: 
   { retainKeyOrder: false,
     typeKey: 'type',
     id: true,
     noVirtualId: false,
     _id: true,
     noId: false,
     validateBeforeSave: true,
     read: null,
     shardKey: null,
     autoIndex: null,
     minimize: true,
     discriminatorKey: '__t',
     versionKey: '__v',
     capped: false,
     bufferCommands: true,
     strict: true } }