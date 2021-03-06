export const packingList = [
  {
    order: 1,
    options: ["Shipper", "Exporter", "Door", "직접입력"],
    category: "address",
    title: "Shipper",
    value: {
      companyNm: "",
      address: "",
      addressDetail: "",
      tel: "",
      email: "",
      etc: ""
    }
  },
  {
    order: 2,
    options: ["Consignee", "Importer", "Door", "직접입력"],
    category: "address",
    title: "Consignee",
    value: {
      companyNm: "",
      address: "",
      addressDetail: "",
      tel: "",
      email: "",
      etc: ""
    }
  },
  {
    order: 3,
    options: ["Notify party", "Same as above", "직접입력"],
    category: "address",
    title: "Notify party",
    value: {
      companyNm: "",
      address: "",
      addressDetail: "",
      tel: "",
      email: "",
      etc: ""
    }
  },
  {
    order: 4,
    options: ["Port of Loading", "From", "직접입력"],
    category: "portInfo",
    title: "Port of Loading",
    value:"",
  },
  {
    order: 5,
    options: ["Port of Discharging", "To", "직접입력"],
    category: "portInfo",
    title: "Port of Discharging",
    value:"",
  },
  {
    order: 5.1,
    options: ["Final destination"],
    category: "portInfo",
    title: "Final destination",
    value:"",
  },
  {
    order: 6,
    options: ["Vessel & Voy", "Flight#", "직접입력"],
    category: "departureInfo",
    title: "Vessel & Voy",
    value:"",
  },
  {
    order: 7,
    options: ["Sailing on or about", "Departure date", "직접입력"],
    category: "departureInfo",
    title: "Sailing on or about",
    value:"",
  },
  {
    order: 8,
    options: ["No. & date of invoice"],
    category: "invoice",
    title: "invoice",
    value:"",
  },
  {
    order: 9,
    options: ["L/C No. and date", "직접입력"],
    category: "lc",
    title: "L/C No. and date",
    value:"",
  },
  {
    order: 10,
    options: ["L/C Issuing Bank", "직접입력"],
    category: "lc",
    title: "L/C Issuing Bank",
    value:"",
  },
  {
    order: 11,
    options: ["Terms of Delivery and payment", "직접입력"],
    category: "payment",
    title: "Terms of Delivery and payment",
    value:"",
  },
  {
    order: 12,
    options: ["Remarks"],
    category: "remark",
    title: "Remarks",
    value:"",
  },
  {
    order: 13,
    options: ["RemShipping Mark"],
    category: "remark",
    title: "RemShipping Mark",
    value:"",
  }
];

export const gridIndex = [
  { title: 'No.', order:14, isOpen: false, key:'palletNo', unit:'PALLET'},
  { title: 'No.',order:15, isOpen: false, key:'ctNo', unit:'CARTONS' },
  { title: 'SKU',order:16, isOpen: false, key:'sku', unit:''},
  { title: 'Description of Goods',order:17, isOpen: false, key:'dog', unit:'' },
  { title: 'Quantity', order:18, isOpen: false, key:'qty', unit:'PCS' },
  { title: 'N/W', order:19, isOpen: false, key:'nwUnit', unit:'KG' },
  { title: 'G/W', order:20,isOpen: false, key:'gwUnit', unit:'KG' },
  { title: 'Measurement', order:21,isOpen: false, key:'measurement',unit:'' },
]

export interface PackingListInfo {
  order: number,
  options: Array<string>,
  category: string,
  title: string,
  value: AddressInfo | string
}

export interface AddressInfo {
  companyNm: string,
  address: string,
  addressDetail: string,
  tel: string,
  email: string,
  etc: string,
}
export interface GridData {
  row: number,
  data: Array<RowData>
}

export interface RowData {
  ctNo: string,
  descOfGoods: string,
  gwUnit: string,
  nwUnit: string,
  palletNo: number,
  qty: string,
  sku: string,
}

export interface RowTarget {
  row: number,
  index: number,
  column: string,
  value:string
}