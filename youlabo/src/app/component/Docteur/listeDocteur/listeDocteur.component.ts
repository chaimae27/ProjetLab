import { DocteurService } from './../../../service/docteur.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Docteur } from 'shared/docteur';

// import * as $ from 'jquery';

@Component({
  selector: 'app-listeDocteur',
  templateUrl: './listeDocteur.component.html',
  styleUrls: ['./listeDocteur.component.css']
})
export class ListeDocteurComponent implements OnInit {

  searchText = '';

  showForm = false;

  myDoctor: Docteur = {
    label: '',
    completed: false
  }
  datas: any[];
  docteur: Docteur[] = [];
  resultDocteur: Docteur[] = [];

  constructor(private docteurService: DocteurService, httpClient: HttpClientModule) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#dtBasicExample').DataTable();
      $('.dataTables_length').addClass('bs-select');
    });
    this.dataGettin();
    // $(document).ready(function () {
    //   $('#datatable').dataTable();

    //   $("[data-toggle=tooltip]").tooltip();

    // });
  }

  dataGettin() {
    this.docteurService.getDocteur().subscribe((e: any[]) => {
      this.datas = e;
      console.log(this.datas);
    });
  }

  // You should refresh page after delete

  deleteTask(id) {
    this.docteurService.delete(id)
      .subscribe(() => {
        this.docteur = this.docteur.filter(docteur => docteur.id != id)
      })
  }

  searchDocteur() {
    this.resultDocteur = this.docteur.filter((docteur) => docteur.label.toLowerCase().includes(this.searchText.toLowerCase()))
  }

}
