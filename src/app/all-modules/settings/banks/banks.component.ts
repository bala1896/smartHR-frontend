import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

// import { ActivatedRoute , Router } from '@angular/router';
import { DataServiceService } from '../../../service/data-service.service';
import { FormBuilder } from '@angular/forms';
// import { AllModulesService } from '../../all-modules.service';
import { ToastrService } from 'ngx-toastr';

import 'jspdf';
declare var jsPDF: any;
declare const $: any;
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  // @ViewChild('exports') exports: ElementRef;
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public addBankForm: FormGroup;
  public editBankForm: FormGroup;
  public lstBank: any[];
  url: any = "site";
  public tempId: any;
  public editId: any;
  // site:any [];
  // sql: string;
  public rows = [];
  public srch = [];
  constructor(
    // private route: ActivatedRoute,
    private data: DataServiceService,
    private formBuilder: FormBuilder,
    // private srvModuleService: AllModulesService,
    private toastr: ToastrService
  ) {
    
   }

  ngOnInit(): void {
    $(document).ready(function(){
        $(".get-pdf").click(function () {
          var octocatPNG = './assets/img/login-logo.png';
          var doc = new jsPDF('l', 'pt', 'letter');
          var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
          var pageWidth= doc.internal.pageSize.height || doc.internal.pageSize.getWidth();
        
          doc.addImage(octocatPNG, "PNG", 15, 35, 100, 40);
          var addSignatureBlock = function(){
            doc.setFontSize(12);
            doc.setLineWidth(1);
            doc.setDrawColor(0,0,0);
            //assign a variable to pull T&C's HERE
            // if (doc.autoTable.previous.finalY > pageHeight - 100/*later adjust this to make room for T&C's*/){
            //   doc.addPage();
            //   doc.text("Authorized Signature:", 25, pageHeight - 85)
            //   doc.line(143, pageHeight - 85, 400, pageHeight - 85)
            //   doc.text("Date:", 415, pageHeight - 85)
            //   doc.line(447, pageHeight - 85, pageWidth - 25, pageHeight - 85)
            //   doc.text("Vendor Acknowledgement:", 25, pageHeight - 50)
            //   doc.line(171, pageHeight - 50, 400, pageHeight - 50)
            //   doc.text("Date:", 415, pageHeight - 50)
            //   doc.line(447, pageHeight - 50, pageWidth - 25, pageHeight - 50)
            // }else{
            //   //add T&C's
            //   doc.text("Authorized Signature:", 25, pageHeight - 85)
            //   doc.line(143, pageHeight - 85, 400, pageHeight - 85)
            //   doc.text("Date:", 415, pageHeight - 85)
            //   doc.line(447, pageHeight - 85, pageWidth - 25, pageHeight - 85)
            //   doc.text("Vendor Acknowledgement:", 25, pageHeight - 50)
            //   doc.line(171, pageHeight - 50, 400, pageHeight - 50)
            //   doc.text("Date:", 415, pageHeight - 50)
            //   doc.line(447, pageHeight - 50, pageWidth - 25, pageHeight - 50)
            // }
          }
          //doc.setFontSize(18)
          //doc.text('Purchase Requisition', pageWidth - 25, 45, 'right');
          //doc.setFontSize(14)
          //doc.text('PO : 0000023', pageWidth - 25, 62, 'right');
          var elemA = document.getElementById("pdfSection");
          var resA = doc.autoTableHtmlToJson(elemA);  
          doc.autoTable(resA.columns, resA.data, {
                addPageContent: function(data) {
                  doc.setFontSize(14);
                  doc.text("Holiday", 350, 112);
                  doc.setFontSize(14);
                  doc.setFontType("bold");
                  doc.text("Leto System Pvt Lt", 25, 90);

                  
                },
                startY: 125,
                pageBreak: 'auto',
                theme: 'grid',
                tableWidth: 'auto',
                styles: {
                  columnWidth: 'auto',
                  fillColor: [255,255,255],
                  textColor: [0,0,0],
                  lineColor: [0,0,0],
                  lineWidth: 0.75
                },
                headerStyles: {
                  fillColor: [240,240,240]
                },
                margin: {right: 25, left: 25, top: 70, bottom: 50}
              });
            // addSignatureBlock();
            // doc.autoTable(resA.columns, resA.data, {
            //     startY: doc.autoTable.previous.finalY + 75,
            //     pageBreak: 'always',
            //     theme: 'grid',
            //     tableWidth: 'auto',
            //     styles: {
            //       columnWidth: 'auto',
            //       fillColor: [255,255,255],
            //       textColor: [0,0,0],
            //       lineColor: [0,0,0],
            //       lineWidth: 0.75
            //     },
            //     headerStyles: {
            //       fillColor: [240,240,240]
            //     },
            //     margin: {right: 25, left: 25, top: 70, bottom: 50}
            //   });
        
            doc.save('Banks.pdf')
        });
    });

    $(document).ready(function(){  
      $('.exceller').click(function () {
          var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64 = function(s) {
              return window.btoa(unescape(encodeURIComponent(s)))
            },
            format = function(s, c) {
              return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
              })
            }
          var toExcel = document.getElementById("pdfSection").innerHTML;
        
          var ctx = {
            //worksheet: name || '',
            table :toExcel,
          };
          
          var link = document.createElement("a");
          link.download = "Banks.xls";
          link.href = uri + base64(format(template, ctx))
          link.click();
        });
    });

    // this.dtOptions = {
    //   pageLength: 10,
    //   dom: "lrtip",
    // };
    this.LoadBank();

    this.addBankForm = this.formBuilder.group({
      BankCode: ["", [Validators.required]],
      BankName: ["", [Validators.required]],
      RountingCode: ["", [Validators.required]],
      Branch: ["", [Validators.required]],
      ManagerName: ["", [Validators.required]],
      PersonMobileNo: ["", [Validators.required]],
      BankMobileNo: ["", [Validators.required]],
      EmailId: ["", [Validators.required]],
      BankAddress: ["", [Validators.required]],
    });

    this.editBankForm = this.formBuilder.group({
      BankCode: ["", [Validators.required]],
      BankName: ["", [Validators.required]],
      RountingCode: ["", [Validators.required]],
      Branch: ["", [Validators.required]],
      ManagerName: ["", [Validators.required]],
      PersonMobileNo: ["", [Validators.required]],
      BankMobileNo: ["", [Validators.required]],
      EmailId: ["", [Validators.required]],
      BankAddress: ["", [Validators.required]],
    });
  }

  LoadBank() {
    this.data.runQuery('SELECT * FROM bankmaster;').subscribe((data) => {
      // console.log(data)
      this.lstBank = data.map(item=>{return {uid:item.uid,
        bankCode:item.code,
        bankName:item.name,
        rountingCode:item.rountingCode,
        branch:item.Branch,
        managerName:item.ManagerName,
        personMobileNo:item.PhoneNo,
        bankMobileNo:item.MobileNo,
        emailId:item.Email_Id,
        bankAddress:item.Address,
        status:item.Status==='Y'? 'Active':'Inactive'}});
      // console.log(this.lstDepartment)
      this.dtTrigger.next();
      this.rows = this.lstBank;
      this.srch = [...this.rows];
    });
  }
  // Add Department  Modal Api Call
  addBank() {
    if (this.addBankForm.valid) {
      let obj = {
        bankCode: this.addBankForm.value.BankCode,
        bankName: this.addBankForm.value.BankName,
        rountingCode: this.addBankForm.value.RountingCode,
        branch: this.addBankForm.value.Branch,
        managerName: this.addBankForm.value.ManagerName,
        personMobileNo: this.addBankForm.value.PersonMobileNo,
        bankMobileNo: this.addBankForm.value.BankMobileNo,
        emailId: this.addBankForm.value.EmailId,
        bankAddress: this.addBankForm.value.BankAddress,
        uid: 0,
      };
      // sulaiman start
      const sql = "insert into bankmaster (code,name,rountingCode,Branch,ManagerName,PhoneNo,MobileNo,Email_Id,Address) values ('" +
      obj.bankCode + "','" + 
      obj.bankName + "' ,'" + 
      obj.rountingCode + "','" + 
      obj.branch + "','" + 
      obj.managerName + "','" + 
      obj.personMobileNo + "','" + 
      obj.bankMobileNo + "','" + 
      obj.emailId + "','" + 
      obj.bankAddress + "')"
      this.data.runQuery(sql)
      .subscribe((data) => {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
        this.LoadBank();
        $("#add_Bank").modal("hide");
        this.addBankForm.reset();
        this.toastr.success("Bank added sucessfully...!", "Success");
      });
      // sulaiman end
    }
  }

  editBank() {
    if (this.editBankForm.valid) {
      let obj = {
        uid: this.editId,
        bankCode: this.editBankForm.value.BankCode,
        bankName: this.editBankForm.value.BankName,
        rountingCode: this.editBankForm.value.RountingCode,
        branch: this.editBankForm.value.Branch,
        managerName: this.editBankForm.value.ManagerName,
        personMobileNo: this.editBankForm.value.PersonMobileNo,
        bankMobileNo: this.editBankForm.value.BankMobileNo,
        emailId: this.editBankForm.value.EmailId,
        bankAddress: this.editBankForm.value.BankAddress,
      };
      console.log(obj)
      // sulaiman start
      const sql = "Update bankmaster set code='" + obj.bankCode
      + "',name ='" + obj.bankName 
      + "',rountingCode ='" + obj.rountingCode 
      + "',Branch ='" + obj.branch
      + "',ManagerName ='" + obj.managerName
      + "',PhoneNo ='" + obj.personMobileNo
      + "',MobileNo ='" + obj.bankMobileNo
      + "',Email_Id ='" + obj.emailId
      + "',Address ='" + obj.bankAddress
      + "'where uid =" + this.editId
      this.data.runQuery(sql)
      .subscribe((data) => {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
        this.LoadBank();
        $("#edit_Bank").modal("hide");
        this.toastr.success("Bank Updated sucessfully...!", "Success");
      });
      // sulaiman end
    }
  }
  // To Get The department Edit Id And Set Values To Edit Modal Form
  edit(value) {
    this.editId = value;
    console.log(this.editId)
    // set the value from grid row by passing the id value
    const index = this.lstBank.findIndex((item) => {
      return item.uid === value;
    });
    let toSetValues = this.lstBank[index];
    console.log(toSetValues)
    this.editBankForm.setValue({
      // uid: toSetValues.item.id,
      BankCode: toSetValues.bankCode,   // added sulaiman
      BankName: toSetValues.bankName,
      RountingCode: toSetValues.rountingCode,
      Branch: toSetValues.branch,
      ManagerName: toSetValues.managerName,
      PersonMobileNo: toSetValues.personMobileNo,
      BankMobileNo: toSetValues.bankMobileNo,
      EmailId: toSetValues.emailId,
      BankAddress: toSetValues.bankAddress,
    });
  }
  deleteBank() {
    // sulaiman start
    const sql = "Delete from bankmaster where uid =" + this.tempId
    this.data.runQuery(sql)
    .subscribe((data) => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.LoadBank();
      $("#delete_Bank").modal("hide");
      this.toastr.success("Bank deleted sucessfully..!", "Success");
    });
    // sulaiman end
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  getStatus(status,uid){
    const statusValue = status==='Active' ? 'Y' : 'N';
    const sql = "Update bankmaster set status='" + statusValue + "' where uid =" + uid
    this.data.runQuery(sql)
      .subscribe((data) => {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();

        });
        this.LoadBank();
        // $("#edit_department").modal("hide");
        this.toastr.success("Bank Updated sucessfully...!", "Success");
      });
  }
}
