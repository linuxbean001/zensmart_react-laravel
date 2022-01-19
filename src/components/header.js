import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function header() {
  return (
    <div>
      <div class="container-fluid mynav fixed-top" >
        <nav class="navbar navbar-expand-lg navbg static-top fixed">
          <div class="container-fluid">
            {/* <img src="https://www.google.com/search?q=task+logo&sxsrf=AOaemvLOEO1WfdiTrNH-bk77ikNc-8mc_Q:1642065719665&tbm=isch&source=iu&ictx=1&vet=1&fir=FyGJxs42Yn4zrM%252C2v6j-Gf0_ybg1M%252C_%253BTLG_gjM2gqVDoM%252CjHrFva5INB_SkM%252C_%253BPQX3f6R-s6fcoM%252CaRacd54RuVvTKM%252C_%253BWHQdmHJFeXhP0M%252Cn7Y1xh4K3rRrzM%252C_%253BXa-sShKg5AcGQM%252Cn7Y1xh4K3rRrzM%252C_%253Bb0bt8GgWQUSq5M%252C2No3BuPsP34yTM%252C_%253BfH3Qtd-QTWk_MM%252CF8N6p7RzjglWHM%252C_%253BnKgTpePYXUQwkM%252Cn7Y1xh4K3rRrzM%252C_%253BDmfuzN0vUFls3M%252C2No3BuPsP34yTM%252C_%253BfgKLdymOObnkQM%252CdB5Vdzo73hbERM%252C_%253BlgpPM53GxWyAkM%252CwprdRAnGHvgJ4M%252C_%253By2pdyUd9ex2rwM%252Cn7Y1xh4K3rRrzM%252C_%253BMRBuUYJb0tYOzM%252CjGO-0wV5MQcHzM%252C_%253BJGpR5Cp8qVT3pM%252CZD_MpITumUm0PM%252C_%253Bgcv49vpFy_5JhM%252Cn7Y1xh4K3rRrzM%252C_&usg=AI4_-kT_Fj5dp1YJBuhTKDDldlFGE2q7Xw&sa=X&ved=2ahUKEwi1hay_s671AhUNVpQKHW3DDvYQ9QF6BAgUEAE#imgrc=PQX3f6R-s6fcoM" alt="" className="" /> */}

            <h3 style={{ "color": "white" }}>ZENSMART</h3>
            <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
                <i class="fa fa-navicon"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse navi" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">HOME
                    <span class="sr-only"></span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    SERVICES
                  </a>
                </li>

                <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>

                <li><div class="input-group">
                  <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder='search' />
                    <label class="form-label" for="form1"></label>
                  </div>

                </div></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}
export default header