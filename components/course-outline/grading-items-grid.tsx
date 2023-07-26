import React from "react";
import GradingItem from "./grading-item";

const items = [
  {
    title: "Workbook Module 1 (10%)",
    description:
      "Students conduct analytics that provide basic foundational information about Mr. Macky's.",
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc9mSstFmysnKjSYv5jbUz6QYWSI83_8cm5DQ_2hF7L3zt6m9qzgqcYGjJ6iYln3lIOlp2hYRFyjI3NgUHQCJJyaMLKwy5Lk6mhAYGgMNXnkB12XWzETBHb2ZYnHfIZLDfUw_YgoDj5z9UAjmTJik1V7FtQfh-4PVplUMXXQmoVevYpdFyrGhrn0T-n5VzkbhqCoZf1e_bRTUcQ-aB9u105OAz2zx4zmRCyQdQOmR3N8lDbM_qrMjUJgoGKr0TcNbeerRiQfpWz6dWNalbxD3UHWF2wyy0xeV2R4NBF42sJYerO7JGpoPUn1K_y2VSolLuhk-iVcH30KADX8R4LFQdmlvdPRKJry-rt-vGyPCyeGegfZgzy5ZNCgvjMTqYqz3lqFswtF1aohDN0CGC70QXL9Pjg66LmC6NpAtDQGM2muP8fAy7IsroPAi3TcYGmVgCRvFv2j2gZ0R1NZ-WjhOCrcDQ0htkFKEm0nM4dSbYEjettRaNt9bHmbmqh8LVApMJtQdubktjbByCfRGhptSRgaUh9af4v3WBmxb17VpkMKLE5-d8XwU4Qcmsk4ovrZrPmGFvwNXRLjbkVdIm01jc42EIwqavSwNNGD-ut9wV73lPuNpy8V4M4tsAeNncHVWmZHSlxST0-eGgcV-IObgqYAT0EMK13THhdoHwcyvFX_puvFhgEZw8O5zoqC_dlbxQbqIliOXMIEGw9Oh_H4XLjVBEhhHy1EHLYEEUZGsSPEv7Idk4cxxBGHrnW_jERnuoyFRkEOAgodHJtJVVDMNwGVhFjgv5H7gNX2GhK1Fnco42StxuC_AGEJALXdx3_5jzwMiJGZG_A3ZNAtJlbzO0B0O7wDbMEHXZQ9N_zl4uPnUwR1CU6TkJcho9x4let6DG79fNgahMXhWC5ohbguK1p7BZ9MjYbGg_NsvXEc2M0we3-Jw-junLOlo4P56eh9V0wEY6lUEQ5ML57qPWT7--azXqPoItpQfyiJ5ELnwc6UOsIdG98gQaxoGpzb1cC_5R_qvxT-bSTFboYpHz3qyRYRl1YHW6wC1uE5=w50-h50-s-no?authuser=0",
    highlighted: false,
  },
  {
    title: "Workbook Module 2 (15%)",
    description:
      "Students analyze the effects associated with managerial performance ratings and turnover",
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc_8XXrArER65rJQ2d93nl2EZktoAJINxSE7sARfZX1AoYVTBf4LhcBVMFC8chUfL7dvpTzbM2nUDy4twXR2l8Jodxtm8WMGxrEVf6VSpCyc1qFQsegDo7t8dXk_4vz_NTAyT45UhSaSfpOKpPrXrVLK4_7b60SmbtsN7Q9f86_AewCTv2tx0-kXrkHjjBFdBzo6SlStTOu_ldJmuU7AWjtYgaqqXqO98lvFvnotXQ50GH-PNdkjG8Wd16L8wPveXou8MtGn-bqweSdcJ9INkHwxnrrGeJgtmiQ828VPf54faLv4y1UV7E79yFlcLA42l57E6VdNeatxAcM_j3UMSl6UHuZe_qmnGcOEnrE6b9RCMBIlk4XEsO_4RR2nhAFzB4cKlecFu5GWY-hZyjwyIwoj8Nhfj-PwjfnWglj91jElowehgauM9IML_Ki4JXmhDhWI_-cTu2Eocpc90bARBRN9cAq1vVLdJQaGoOkxTPp2pqxj87-szfzcj8GX-vVWZARGlZ1Ck3L_b7E_1OxIcinWUrSFkgzcO1fm9Pc62vNcdqT1twBhGi02iRp0Fx-ru5q9Kj671hiDHm_s7EoUKBdTkI4E-FwJymkvpDYDsZMGSWBRGUhNRHx6dUp6zE3pAigyI3moR7oQSI9l3s4easDiGoMwNqa2RPFyOn5DAxSUkR4DCyUfyKswfCwjh5FPCJxnbrE0Z44cNHteer-Yq4YMQ1qEXevoBbvTVtRxwgh6HQsuJ-YN3-AoY1z1Xsltne2MNHXzwwenDQJOSSMvq6qtjKVomMCFf3N1Hdmoee03UPaSvR5_MVSkPMYNXI6kiYLWcKt32f17FmKL1hqaV2PhR-fbApb-XGfpbpHU1E6zrEMM8dy1DW6fO-reAxodBbUSVdYVve_XsTGRc_NeXOtD_TFsuigF0DWi0ZHA3d7TZzlZxs30bgZnqw6qHtEirMb_f7PLpHn3OnuiEFb2D5DPMrwcOBMt7d-eeCTMbDLTF8QrUgGy20qsI1xaBa_17m3IdIlM9CDEtoqpWUPfDxFkuw59qAEvxg5l=w50-h50-s-no?authuser=0",
    highlighted: false,
  },
  {
    title: "Workbook Module 3 (15%)",
    description:
      "Students explore issues associated with engagement, diversity, and selection.",
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc8Ds5wrbCq-WeNjx9smiOpShbvw604YUVC7k6A0KtlIilw6JyZGEBHBiIDZpskHWGbxLLyOZlh3vlMeFd5Vvo244bFVpxPZ1XGVXr64q9oJyIdFtP9cq5-O5Z9aQEp1AQk2KeYGvnyM6uBd4BWFKz-vlFSoJW_OxlbsWAQvDC7jnCSDsKV-ugNbQA1RNGIneRoL0EN2Wn08JPB-gBbxKhc93MiJqxmWAWWcb83GxK6A7xC23opRbFksNaf0nEFy069BltliQAjd-5d5zK5MoJGNCpUfL22L3rL2Ru_mCuY7X8Ny-00h5TirhlquD6xkGYNUJNJNV1wIfd681Ydy5ZnC8nomRBYtrXbr2DMK_J4dy0knxHaNKrjWYjld_9HR_XzvV9AaOoVnq_r8OwCqfNY7Sw8pFWfo5MvtTjhPM8cWlcW05GDKMNF_rp2LS6Xn2GGiO4YtD6vYdfrwTWYxJZXYwek_4odZyNfNlP3Jz5PIG-5DjCPiTYcwxjEMj3Wbtqqj_jVPr56L-nlibngnbHY_n7TAhtymlSFsAWryHVBn6jJtBZ5YgLIqzPfJ72h4MCbF42KlYmXRA0WEJ3TR0ORC5dMPmxc59X8T4Wpif4GjM9w7Rz47v1X-JbERm4iZJV_sKve2hRdeRSfsc6HKqo3aIE7EEmIq28M56G_ZkBN-zLlIc7AAgCpQLNMn5C9_n3igOIMSZvuclPlSi5yBTmmW15sg1bbGDc4w94LsBwePykskrEQViJcDzTzajPDQWX6bBlI_k1ubthFeoz6xcCyL_bFrXybeJPRMo1wggpmjsr7f_aUCaXOd-WkeF5IymHt40MivNU0itieMiRzh9t6vUwjAA8_rMCrZzqxoiEYgfgRU9DKaQtmexaJINNoBx8q52Gi9Vec5jn710ynGC-smyT8ukAjE9ixrlaDIPgKfljjlBYtsL8ASCseYsPZPyYZG7H60zpMe9T0xb-gt-A7usNulrmftK4enGTFXIPivjRew7aMN3gXYJ9HwPy9jALUmkYyePTXWX5MAlaMU4UeY-6q1ZVBInkCV=w50-h50-s-no?authuser=0",
    highlighted: false,
  },
  {
    title: "Workbook Module 4 (15%)",
    description:
      "Students engage in HR Analytics associated with employee development and compensation",
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc8Gk8h0EtEkv9ZR-jqM3gCBbruUxwJFDdNU-DIuQLo1_Fe95hxAyhUQXkqhlN3_SK0xifVdWl8M6THTxe-hconjzN_mz0yhXfEYGGtTLzrFSLPLZp3jhil3ezbdVnLMlZGeXuKTYcwGvScpgckMjEaHSgPhlSwLOJ64KstAZoEhtfBHZPMGWWulAWbIlHqocEY96hGhgXchLILejLtdoaB5fnCHQbnGDCMUA_TfsKMzCM2AnoDW0SJFUpbCHbGEsbvQwuHoi4roa4UOW8rONpilCt_frIbthJeN6Q7zv9yUdjZVsAIKSFtrlIqrLSpxOrC-7g1JrajWLhm9naoG_bJ6qsiBH3V8EwUUMk8vOZCsmyl5mIJxj4cIIYD2vsyZ-a9iV6Q3TuVaxAl1scUrEzj6i2LKM4t7tAn1KL1l8UZmOhL4CXqy4KhTd2r3Qksd7kvvqTT9QyrXFGml3YT1xr7eUIDR3qSBWwZzvsfo0dzUDxqwEcQTkOB9yYSVhq13HJEBEDeXXvDfDZRN2fJsehZbN8gRsJ4OWB6_kEDWaYxxMJBf6K4tr1fW3-oBTylzGKZi8boG48B34yCcDffB8tCI2h9I06Nhikxe1c8Buzxo4BbSJ2_0aahd-brne7TOfzKUDHauTheQuZES4R-fj5GT2thnEnElAR0jDLMV1Ghj4sz-uOk6vgvxPdwUxRl4CJ28WWowvQkMhoLl_FaOom_NSciuYE2LpCGXSUpXoZW4PRtM_na0wly3YICLL46uFWN-yDUtmUYCJtFVapnihGJIq1uuCBlYAExlcjx0tfWFTqAZU-cCrATbvtdIimAWwena_pgVRJb8CLHEZC1OfkcJQ7QVmbOpUiRfbdWFl6J9f5-ybkkpjv-DoRoUQwswDEU2HJ85DJui5czFY7hyd6zbKk8FSmKBfo52UdTRksmvZgkniQgVcsG_nXkMGTiu46h5fMRx2oLCem1nPYbByGAKM_7hbtzyz8IvFSreVY-WMI05LEARBdbl6-M_225K75OeXdPF1R_Auq1HNyaIZ9W4yCyBLWMZ7OjT=w50-h50-s-no?authuser=0",
    highlighted: false,
  },
  {
    title: "Workbook Module 5 (20%)",
    description:
      "Module 5 covers all aspects of analytics covered in the course and the overall impact of HR functions to Mr. Macky's",
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc8ZZ7xrRbao79YQw8BIzCjQw8uPMk7dUcd3wvmYAjldyRfCj6id6KQv0IkVt6AEU4_dRKGrRx1gQl3Te5TMbn-b-ZuJxPKs7Wj1F9X3FoElrqJKMsefx2O19MGi2ahr2OtG5cklrlp5qtbVLFDwxBT6_aAcliqSuulZkOOUZSSWRglzppUMcMXkfU0Fhklt1UhS7QacgWUwa8MvKaAE9Na09V83gV88OVnXZNwBHR6hwOsAuhfVnDZnPMgVZIM75MslylGXmLnmIvfJJYOxC9yW3XUz2Uf7ulGCmn_Qm0OHhNHDBfjdfCw0Hj7sLP9QeYs1syu4K01u_WcCSTYY0mqzYoPiRhtRYBdCUGBHoQLWcpFxo68kTtlyBjtWBur1vETW5xwsJSOeCZ55CPmYmXfnWeZLNd5ACPhSEP3LqUd8TiUIFG_9o93yqjWmuldnAe7uQeFkt7-jU_Lloe1XmQttsuLKpOYrasSGv8cJXQwo_HaHBNbMbJ3Uy-ByZQmlZfvOdNUewB4AWuFIkGi-rDc_OjBkJktkroKBa0Aq9e2U6JG3pYQyfrL3T3F6d_oHoRujF05nEoaEI89jZhV-wsPddhT2u9FRaHfXEmIoCXs4uz8IXSdFHS3hZJ-4ZTwB0ImXafhFjncNdpZrAZh9EH3WS9NtVNIqr6Mz_ImOF8R0elBx5fU806XC9m8AuRvMUhMo0iOY96Ht2GFn2aSZFcL6WaMFItNNK0o55TEi0eWEMbx5ax7KfbhsrGWwb9BRDnILyO6NYDjMqJNOUpSpLdYpLtuOKlye8mqXEl05oRpVmQ6YPi1wcu_yXaHBrZjsapevWq34ei9nJ_QOUOZ6jKaUYBclcpU9yFFiZJDSn0BIHT7mZMeUp-jSqUaV4EqHoDSFF30mvPLAPds3ZCSQpSzvQ8FutQicaoSAAIk4LYi-GtEpX2GUZ1_Jp0scJAEf3RNFQRAK_n-rbFKA4Gt6o6eCIWc1OMbTCaNZCFrwaQGBQqxB8qliaezmlL5UDWq9gwvEc8OzM_ajx6zbOlVfiGhiBNpVVB7TcfFV=w320-h320-s-no?authuser=0",
    highlighted: false,
  },
  {
    title: "Weekly Assignments (25%)",
    description:
      "Students are given short articles/book chapters to read and submit their response to short-answer questions",
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc-pxD3L5pAnNYSPI7sbbp06EL4v_zzrDYKHrIPGq-FRCdJxPey3uMjmtGKISl2HrbWYmpQ5c9A2KIyxiZdrYT6N4EYpb8H_RlLXdLmCHX33F3B0OePPRYOHK-IvGIEKwa7wbUdKbk6LzMdfiXEjyizQVa09KXgFhG64JFH73tdIR35VpGs_7jBdnunfkFZUj_IEJCMWVMaMn__MuHzhbTnYyVin6WihonnTeF3mzjHDpobTpUyK6w_J126VFPUUSBuVKV7R-p5ignEzHyqwXLu17SWiQXMT_t7YaHW3AIqLA-HGWwV9HTjAyUTrMZMI_U0irGfLnPyEwSngtH4M0mxHo9oY4laYbQ2AtDmvdco5cC07RXy7Xj3zE6K0aY2KNyLx9tXYXb8gFU11Aoo-6ECFy9qu406MKX9hA2X3l9TjMrphykIzYfGLkE7brnEzzsgxJXwt9fqVU-am9-Rs-KxBgLfCFsVUpKJbmfFnSgoVNYwJ-O7_KSlm1wes-XDpszYqkhqZyAnZ_9XMwxmppMcuiWDsMc7k_U97qBDKKD7u8h_vVRc9_MbrBoq0HoIILSxTDl-AGo4YanIwdKfITde2hUSUq556ThG11IJuGiYXMJoHv-Q622N-lgA_3nzIAK5KHLEuuw6YfiA2D6rLspmTeLwzndn-OMC-ic840zhFtsGsIkNVEqjdvt5M6gJhVtZP0U4BRzqcx2hSQLkjFQ5VD-XVtjIBLfAs0Zl4m0-UW1J15YUlj3fJ9Ng0hikAQLMGteajz41MokmSbE9OnMYloe7aNkT8NUkzeyp-uZHoo_b6fzYXJ4Z9cyKs-Wys0N69-lJtHX6k5EoqZulNd5Z2E4575lMK3dm_wmvDqtGt_JtlUerzegivXNA5OUwz0o8HLg1uSKkesYId_og_Tp9F2c_il8Cs1VsprZGiWfafjZdYTJwOGyMrshJF3IkQ05SUe7VcjW18Tim9_6mDmQsNDR9ynAgPzfbjAv_U6tUtGlHxCN9-OIFxa74Eb5rkvyQVtCyvNpJdDzHuBBMpR3in9-6FtLKIDN2q=w200-h200-s-no?authuser=0",
    highlighted: true,
  },
];

interface GradingItemsGridProps {
  className?: string;
}

const GradingItemsGrid = ({className}: GradingItemsGridProps) => {
  return (
    <div className={`${className} grid grid-cols-1 gap-8 lg:grid-cols-2`}>
      {items.map((item, index) => (
        <GradingItem
          key={item.title + index}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          highlighted={item.highlighted}
        />
      ))}
    </div>
  );
};

export default GradingItemsGrid;
