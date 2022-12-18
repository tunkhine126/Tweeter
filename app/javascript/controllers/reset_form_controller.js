// import hotwire so we have all the full library to use
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  // take form and clear out form
  reset() {
    this.element.reset()
  }
}