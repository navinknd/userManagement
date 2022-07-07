import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FavoriteComponent } from './favorite.component';
import { RouterTestingModule } from '@angular/router/testing'
describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inintial data is null or empty', () => {
    expect(component.data).toEqual([]);
  })
  it('should toggle show', () => {
    component.show = false;
    component.showChange();
    if(component.data.length>0){
      console.log(component.data.length,"show data length");
      expect(fixture.componentInstance.data.length).toBe(3);
    }
    expect(component.show).toBe(false);
  });
  it('should toggle hide', () => {
    component.show = true;
    component.hideChange();
    if(component.data.length>=0){
      console.log(component.data.length,"hide data length");
      expect(fixture.componentInstance.data.length).toBe(0);
    }
    expect(component.show).toBe(true);
  });
});
