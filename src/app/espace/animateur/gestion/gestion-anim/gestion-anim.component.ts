import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { AnimHomeService } from '../../anim-home.service';
import { takeUntil } from 'rxjs/operators';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-gestion-anim',
  templateUrl: './gestion-anim.component.html',
  styleUrls: ['./gestion-anim.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class GestionAnimComponent implements OnInit, OnDestroy 
{

  categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];
    currentCategory: string;
    searchTerm: string;
crudComp: CrudPopupComponent;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AnimHomeService} _animHomeService
     */
    constructor(
        private _animHomeService: AnimHomeService,private parCrud: CrudPopupComponent

    )
    {
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';

        // Set the private defaults
        this._unsubscribeAll = new Subject();
		
		this.crudComp=this.parCrud;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to categories
        this._animHomeService.onCategoriesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(categories => {
                this.categories = categories;
            });

        // Subscribe to courses
        this._animHomeService.onCoursesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(courses => {
                this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter courses by category
     */
    filterCoursesByCategory(): void
    {
        // Filter
        if ( this.currentCategory === 'all' )
        {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else
        {
            this.coursesFilteredByCategory = this.courses.filter((course) => {
                return course.category === this.currentCategory;
            });

            this.filteredCourses = [...this.coursesFilteredByCategory];

        }

        // Re-filter by search term
        this.filterCoursesByTerm();
    }

    /**
     * Filter courses by term
     */
    filterCoursesByTerm(): void
    {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if ( searchTerm === '' )
        {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else
        {
            this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    }
}
