import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services/policy.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-policy-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgxPaginationModule],
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.scss'
})

export class PolicyListComponent implements OnInit {
  policies: any[] = [];
  filterForm: any = FormGroup;
  currentPage: number = 1;

  constructor(
    private _policy: PolicyService,
    private _fb: FormBuilder
  ) {
    this.filterForm = this._fb.group({
      name: [''],
      type: [''],
      minpremium: [''],
      maxpremium: [''],
      mincoverage: [''],
      sort: [''],
    })
  }
  ngOnInit(): void {
    this.fetchPolicies();
  }

  fetchPolicies(): void {
    const filters = this.filterForm.value;
    this._policy.getPolicies(filters).subscribe((data: any) => {
      this.policies = data;
      console.log("this.policies", this.policies);
      this.currentPage = 1;
    })
  }

}
