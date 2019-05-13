const { Given, When, Then } = require('cucumber');
const { Selector } = require ('testcafe');


  Given('ya que me encuentro en google', async function () {
    await testController.navigateTo('http://www.google.com/')
});


When('busco las Sucursales {string}',{timeout: 1 * 50000}, async function (string)
{
  const busqueda = Selector('#tsf').find('[name="q"]')
  await testController.typeText(busqueda, string)
  .pressKey('enter')

});


When('selecciono {string}',{timeout: 1 * 50000}, async function (sucursal)
{
  const nombreSucursal = Selector('span').withText(sucursal)
  await testController.typeText(nombreSucursal, sucursal) 
});

When('hago clic en el {string}',{timeout: 1 * 50000}, async function (Sitio)
{

  const Button = Selector('#akp_uid_0 > div > div > div > div > div > div.kp-blk.knowledge-panel.Wnoohf.OJXvsb > div > div.ifM9O > div:nth-child(2) > div.kp-header > div > div.NFQFxe.Hhmu2e.viOShc.LKPcQc.mod > div > div.IzNS7c.duf-h > div:nth-child(1) > a')
 // const Button = Selector('.wLAgVc').find('div').withText(Sitio)
  await await testController.click(Button) 
});



  When('ingresar a {string}', {timeout: 1 * 50000}, async function (string) {
    const Button = Selector('#new_tottus_nav_cliente_recetas').find('a').find('img');
    await testController.click(Button)
   
  });

  When('selecciono dificultad {string}',{timeout: 1 * 50000}, async function (string) {
    const Button = Selector('button').withText('ALTA');
    await testController.click(Button);
    
  });

  When('selecciono la receta de {string}', {timeout: 1 * 50000}, async function (string) {
    const Button = Selector('h3').withText('CORONA DE ROLLITOS DE CANELA');
    await testController.click(Button);
  });

  Then('buscar ingrediente {string}', {timeout: 1 * 50000}, async function (Ingrediente1) {
    const Ingredientes = Selector('#hero > div > div > div:nth-child(3) > div.headerDivRecipe > div.divRecipe > p:nth-child(4)').with({ boundTestRun: testController });
    await testController.expect(Ingredientes.innerText).contains(Ingrediente1);
  });


  Then ('buscar otro ingrediente {string}', {timeout: 1 * 50000}, async function (Ingrediente2) {
    
    
    const Ingredientes = Selector('#hero > div > div > div:nth-child(3) > div.headerDivRecipe > div.divRecipe > p:nth-child(5)').with({ boundTestRun: testController });
    await testController.expect(Ingredientes.innerText).contains(Ingrediente2);
  });