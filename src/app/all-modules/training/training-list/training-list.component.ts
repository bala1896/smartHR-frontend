import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { DatePipe } from "@angular/common";

import 'jspdf';

declare var jsPDF: any;
declare const $: any;
@Component({
  selector: "app-training-list",
  templateUrl: "./training-list.component.html",
  styleUrls: ["./training-list.component.css"],
})
export class TrainingListComponent implements OnInit, OnDestroy {
  lstTraininglist: any[];
  url: any = "traininglist";
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  public tempId: any;
  public editId: any;

  public rows = [];
  public srch = [];
  public statusValue;
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");
  public addTrainerForm: FormGroup;
  public editTrainerForm: FormGroup;
  public start;
  public end;
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
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
                  doc.text("Trainers List", 350, 112);
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
        
            doc.save('Trainers List.pdf')
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
            worksheet: name || '',
            table :toExcel,
          };
          
          var link = document.createElement("a");
          link.download = "Trainers List.xls";
          link.href = uri + base64(format(template, ctx))
          link.click();
        });
    });
    this.loadtrainerlist();
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip", // ... skipped ...
    };

    this.addTrainerForm = this.formBuilder.group({
      Type: ["", [Validators.required]],
      TranierName: ["", [Validators.required]],
      EmployeeName: ["", [Validators.required]],
      startDateTime: ["", [Validators.required]],
      endDateTime: ["", [Validators.required]],
      costName: ["", [Validators.required]],
      Description: ["", [Validators.required]],
      StatusName: ["", [Validators.required]],
    });

    this.editTrainerForm = this.formBuilder.group({
      Type: ["", [Validators.required]],
      TranierName: ["", [Validators.required]],
      EmployeeName: ["", [Validators.required]],
      startDateTime: ["", [Validators.required]],
      endDateTime: ["", [Validators.required]],
      costName: ["", [Validators.required]],
      Description: ["", [Validators.required]],
      StatusName: ["", [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }
  // Get  trainer Api Call
  loadtrainerlist() {
    this.srvModuleService.get(this.url).subscribe((data) => {
      this.lstTraininglist = data;
      this.rows = this.lstTraininglist;
      this.srch = [...this.rows];
    });
  }

  // Add  goal type  Modal Api Call
  addTrainingType() {
    if (this.addTrainerForm.valid) {
      let StartDatetime = this.pipe.transform(
        this.addTrainerForm.value.startDateTime,
        "dd-MM-yyyy"
      );
      let EndDatetime = this.pipe.transform(
        this.addTrainerForm.value.endDateTime,
        "dd-MM-yyyy"
      );
      let obj = {
        trainingType: this.addTrainerForm.value.Type,
        trainer: this.addTrainerForm.value.TranierName,
        employee: this.addTrainerForm.value.EmployeeName,
        timeDuration: "7 May 2019 - 10 May 2019",
        startDate: StartDatetime,
        endDate: EndDatetime,
        cost: this.addTrainerForm.value.costName,
        description: this.addTrainerForm.value.Description,
        status: this.addTrainerForm.value.StatusName,
      };
      this.srvModuleService.add(obj, this.url).subscribe((data) => {
        $("#datatable").DataTable().clear();
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
        this.dtTrigger.next();
      });
      this.loadtrainerlist();
      $("#add_training").modal("hide");
      this.addTrainerForm.reset();
      this.toastr.success("Training added sucessfully...!", "Success");
    }
  }

  // to know the date picker changes

  from(data) {
    this.start = this.pipe.transform(data, "dd-MM-yyyy");
  }
  to(data) {
    this.end = this.pipe.transform(data, "dd-MM-yyyy");
  }
  editTrainingType() {
    if (this.editTrainerForm.valid) {
      let obj = {
        trainingType: this.editTrainerForm.value.Type,
        trainer: this.editTrainerForm.value.TranierName,
        employee: this.editTrainerForm.value.EmployeeName,
        timeDuration: "7 May 2019 - 10 May 2019",
        startDate: this.start,
        endDate: this.end,
        cost: this.editTrainerForm.value.costName,
        description: this.editTrainerForm.value.Description,
        status: this.editTrainerForm.value.StatusName,
        id: this.editId,
      };
      this.srvModuleService.update(obj, this.url).subscribe((data1) => {
        $("#datatable").DataTable().clear();
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
        this.dtTrigger.next();
      });
      this.loadtrainerlist();
      $("#edit_training").modal("hide");
      this.toastr.success("Training Updated sucessfully...!", "Success");
    }
  }

  // To Get The goal type Edit Id And Set Values To Edit Modal Form
  edit(value) {
    this.editId = value;
    const index = this.lstTraininglist.findIndex((item) => {
      return item.id === value;
    });
    let toSetValues = this.lstTraininglist[index];
    this.editTrainerForm.setValue({
      Type: toSetValues.trainingType,
      TranierName: toSetValues.trainer,
      EmployeeName: toSetValues.employee,
      startDateTime: toSetValues.startDate,
      endDateTime: toSetValues.endDate,
      costName: toSetValues.cost,
      Description: toSetValues.description,
      StatusName: toSetValues.status,
    });
  }

  deleteTraining() {
    this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.loadtrainerlist();
    $("#delete_training").modal("hide");
    this.toastr.success("Training  deleted sucessfully..!", "Success");
  }

  //getting the status value
  getStatus(data) {
    this.statusValue = data;
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
