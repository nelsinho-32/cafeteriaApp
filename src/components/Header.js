export function renderHeader() {
    const basePath = window.location.pathname.includes('/src/')
        ? '../../'
        : './';

    const headerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm nav-bar">
          <div class="container">
              <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
                  <img src="${basePath}assets/logoCafeteria.webp" alt="logo" />
                  <span class="ms-2 fw-bold">Doce Esquina</span>
              </a>
              <div class="d-flex align-items-center">
                  <a class="nav-link text-dark" href="${basePath}index.html">Home</a>
                  <a class="nav-link text-dark ms-3" href="${basePath}src/cardapio/cadapio.html">Cardápio</a>
                  <div class="dropdown ms-3">
                    <a href="#"><i class="bi bi-bell ms-3 text-primary"></i></a>
                  </div>
                  <a href="${basePath}src/cart/shoppingCart.html"><i class="bi bi-cart3 ms-3 fs-4"></i></a>
                  <div class="dropdown ms-3">
                      <a href="#" id="dropdownMenuCasa" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="bi bi-house-fill fs-4"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuCasa">
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/profile/profile.html">
                                  <i class="bi bi-person-circle me-2"></i> Perfil
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/perfilConfigs/perfilConfigs.html">
                                  <i class="bi bi-person-gear me-2"></i> Configurações
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/pedidos/orders.html">
                                  <i class="bi bi-cart-check me-2"></i> Meus Pedidos
                              </a>
                          </li>
                              <hr class="dropdown-divider">
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center" href="${basePath}src/login/login.html">
                                  <i class="bi bi-box-arrow-in-left me-2"></i> Entrar
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item d-flex align-items-center text-danger" href="${basePath}src/login/login.html">
                                  <i class="bi bi-box-arrow-right me-2"></i> Sair
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
}