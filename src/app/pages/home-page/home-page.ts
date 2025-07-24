import { Component } from '@angular/core';
import { HeroSection } from "../../components/homeComponents/hero-section/hero-section";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
