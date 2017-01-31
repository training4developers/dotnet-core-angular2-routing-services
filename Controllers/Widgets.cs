using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Training4Developers.Interfaces;
using Training4Developers.Models;

namespace Training4Developers.Controllers
{
  [Route("[controller]")]
  public class Widgets : Controller
  {
    private readonly IWidgetRepo _widgetRepo;

    public Widgets(IWidgetRepo widgetRepo)
    {
      _widgetRepo = widgetRepo;
    }

    [HttpGet]
    public IActionResult Get()
    {
      return new ObjectResult(_widgetRepo.GetAll());
    }
  }
}