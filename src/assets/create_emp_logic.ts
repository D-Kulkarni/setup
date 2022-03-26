// import { ToastMessageService } from './../../../../core/services/toast-message.service';
// import { EMPLOYEE_STATUS_CHOICES_CONSTANT, USER_TYPE_CHOICES_CONSTANT, GENDER_CONSTANT, MARITIALSTATUS_CONSTANT, PATTERN_VALIDATORS } from './../../../../shared/constants/validator-patterns.constant';
// import { EmployeeService } from './../../services/employee.service';
// import { DateFormatterService } from './../../../../shared/services/date-formatter.service';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { CommonApiService } from './../../../../shared/services/common-api.service';
// import { HttpErrorResponse } from '@angular/common/http';


// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.scss']
// })
// export class CreateEmployeeComponent implements OnInit {
//   genderDropDown:any[];
//   maritialstatusDropDown:any[];
//   form!:FormGroup;
//   allCountriesList!:Array<any>;
//   allStatesList!:Array<any>;
//   allCitiesList!:Array<any>;
//   countryisoCode!:string;
//   departmentList!:Array<any>;
//   branchList!:Array<any>;
//   designationList!:Array<any>;
//   employeeStatus!:Array<any>;
//   userTypes!:Array<any>;
//   employeeId!:any;
//   editableMode:boolean= false ;
//   constructor(
//     private route :Router,
//     private activatedRoute:ActivatedRoute,
//     private formBuilder:FormBuilder,
//     private commonApiService:CommonApiService,
//     private dateFormatter:DateFormatterService,
//     private employeeService:EmployeeService,
//     private ToastService:ToastMessageService
//     ) 
//     { 
//     this.genderDropDown = GENDER_CONSTANT;
//     this.maritialstatusDropDown= MARITIALSTATUS_CONSTANT;
//     this.employeeStatus = EMPLOYEE_STATUS_CHOICES_CONSTANT;
//     this.userTypes = USER_TYPE_CHOICES_CONSTANT;
//     // this.designationList =
   
//     }
  
 

//   ngOnInit(): void {
// this.employeeId = this.activatedRoute.snapshot.paramMap.get("id");
// console.log('id',this.employeeId);
//     if(this.employeeId) {
//       this.getOneEmployee();
//     }
//     this.formInit()
//     this.getAllCountries();
//     this.getDepartmentList();
//     this.getBranchList();
//     this.getDesignationList();

//   }

//   getOneEmployee() {
//     this.employeeService.getOneEmployeeDetails(this.employeeId).subscribe((res:any)=>{
//       console.log('res',res);
//       this.editableMode = true ;
//       this.patchData(res)
//     })
//   }
//   patchData(resData:any) {
//     console.log(resData);
    
//     this.form.patchValue({
//       employee_user_account:{
//         employee_id:resData.employee_user_account.employee_id,
//         personal_email:resData.employee_user_account.personal_email,
//         date_of_birth:resData.employee_user_account.date_of_birth,
//         date_of_joining:resData.employee_user_account.date_of_joining,
//         gender:resData.employee_user_account.gender,
//         marital_status:resData.employee_user_account.marital_status,
//         branch:resData.employee_user_account.branch,
//         // employee_designation:resData.employee_user_account?.employee_designation,
//         // department:this.departmentList.find((element:any)=>{return resData.employee_user_account.department}),
//         employee_status:resData.employee_user_account.employee_status,
//         phone:resData.employee_user_account.phone,
//         emergancy_phone:resData.employee_user_account.emergancy_phone,
//       },
//       first_name:resData.first_name,
//       last_name:resData.last_name,
//       user_type:resData.user_type,
//       email:resData.email,
   
     
//     })
//     this.createItem(resData.user_address)

//     console.log('formData',this.form.value);
    

//   }

//   updateEmployee() {
//     console.log('inDupdate');
    
//   }

// getDepartmentList() {
//   this.commonApiService.getDepartmentList().subscribe((res:any)=>{
//     this.departmentList = res;
//   })
// }
// getBranchList() {
//   this.commonApiService.getBranchList().subscribe((res:any)=>{
//     this.branchList = res;
//   })
// }
// getDesignationList() {
//   this.commonApiService.getDesignationList().subscribe((res:any)=>{
//     this.designationList = res;
//   })
// }


//   formInit() {
//     this.form = this.formBuilder.group({
//       employee_user_account: this.formBuilder.group({
//         employee_id: ["",[Validators.required,Validators.maxLength(5)]],
//         phone: ["",[Validators.required,Validators.pattern(PATTERN_VALIDATORS.PHONE_PATTERN)]],//Added phone no patttern
//         emergancy_phone: ['',[Validators.required,Validators.pattern(PATTERN_VALIDATORS.PHONE_PATTERN)]],
//         date_of_birth: ["",Validators.required],
//         date_of_joining: ["",Validators.required],
//         employee_status:["",Validators.required],
//         gender:["",Validators.required],
//         marital_status: ["",Validators.required],
//         employee_designation: ["",Validators.required],
//         branch: ["",Validators.required],
//         department:["",Validators.required],
//         personal_email:["",[Validators.required,Validators.email,Validators.pattern(PATTERN_VALIDATORS.EMAIL_PATTERN)]]
//       }),

//       email: ["",Validators.required],
//       password: ['gsource@1'],
//       user_type: ["",Validators.required],
//       first_name: ["",[Validators.required,Validators.pattern(PATTERN_VALIDATORS.USER_NAME_PATTERN)]],
//       last_name:['',[Validators.required,Validators.pattern(PATTERN_VALIDATORS.USER_NAME_PATTERN)]],

//       user_address : this.formBuilder.array([
//     ])
    
      
// })
// this.createItem(null);

//   }

  

//   createItem(data:any[]) {
//       if(!data) {
//         (this.form.get('user_address') as FormArray).push( this.formBuilder.group({
//             address_line: [ '',Validators.required],
//             city: ['',Validators.required],
//             state: [ '',Validators.required],
//             country: [ '',Validators.required],
//             zip_code: [ '',[Validators.required]],
//             address_type: [{address_type:'Office Address'},Validators.required]
//           }))
//       }
//       if(data && data.length > 0) {
//           data.forEach(el=>{
//             (this.form.get('user_address') as FormArray).push( this.formBuilder.group({
//                 address_line: [el.address_line ?? '',Validators.required],
//                 city: [el.city ??'',Validators.required],
//                 state: [el.state ?? '',Validators.required],
//                 country: [el.country ?? '',Validators.required],
//                 zip_code: [el.zip_code ?? '',[Validators.required]],
//                 address_type: [{address_type:'Office Address'},Validators.required]
//               }))
//           })
        
//       }
    
//   }

//   createEmployeeAccount() {
//     // this.form.value.user_address = {
//     //   city : this.form.value.user_address.city.name,
//     //   country:this.form.value.user_address.country.name,
//     //   state:this.form.value.user_address.state.name
//     // }
    
//     /**
//      * @description to do optimize 
//      */
//      this.form.value.user_address.forEach((element:any) => {
//         console.log('element',element);
//           element.country = element.country.name ;
//           element.state = element.state.name ;
        
//      });
//     this.form.patchValue({
//       employee_user_account: {
//         date_of_birth: this.dateFormatter.isoToStringDateConverterYYYYMMDDNew(this.form.value.employee_user_account.date_of_birth),
//         date_of_joining: this.dateFormatter.isoToStringDateConverterYYYYMMDD(this.form.value.employee_user_account.date_of_joining)
//       },
//       // user_address : {
//       //   city : this.form.value.user_address[0].city.name,
//       //   country:this.form.value.user_address[0].country.name,
//       //   state:this.form.value.user_address[0].state.name
//       // }
//     })
//     console.log('formData',this.form.value);
//     this.employeeService.createEmployee(this.form.value).subscribe((res:any)=>{
//       console.log('res',res);
//       this.ToastService.successToast('Employee created Successfully','Success');

//       setTimeout(() => {
//         this.route.navigate(['/employees'])
//       }, 700);
//     },(err:HttpErrorResponse)=>{
//       this.ToastService.errorToast(`${err.error}`,'')
//     })
      
//   }

//   cancelCreateemployee()
//   {
//     this.route.navigate(['employees']);

//   }
//   get f(){  
//     // return this.form.controls;  
//     return this.form.get('user_address') as FormArray
//   }  
  

//     // Code for getting Countries , state and cities 

//     getAllCountries() {
//       this.allCountriesList = this.commonApiService.getAllCountires();
//     }

//     onCountrySelect(data:any) {
//       this.countryisoCode = data.value.isoCode;
//       this.getStates(data.value.isoCode)
//       this.getCitiesList('')
//     }
  
//     getStates(countryIsoCode:string) {
//       this.allStatesList = this.commonApiService.getStatesByCountryCode(countryIsoCode)
//     }
    
//     onStateSelect(data:any) {
//       console.log('data',data);
      
//     this.getCitiesList(data.value.isoCode)
//     }
  
//     getCitiesList(stateIsoCode:string) {
//       this.allCitiesList = this.commonApiService.getCitiesByStateCode(this.countryisoCode,stateIsoCode)
//     }

// }
