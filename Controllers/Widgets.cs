using Microsoft.AspNetCore.Mvc;

using Training4Developers.Interfaces;

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
      // wrap the object to be an action result
      return new ObjectResult(_widgetRepo.GetAll());
    }

    // specify parameters for the route
    [HttpGet("{id}")]
    public IActionResult Get(int id) {

        var widget = _widgetRepo.Get(id);

        // if no widget is found, return a 404 error
        if (widget == null) {
            return NotFound();
        }

        return new ObjectResult(widget);
    }
  }
}