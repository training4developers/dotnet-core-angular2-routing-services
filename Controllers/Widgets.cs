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
      return new ObjectResult(_widgetRepo.GetAll());
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id) {

        var widget = _widgetRepo.Get(id);

        if (widget == null) {
            return NotFound();
        }

        return new ObjectResult(widget);
    }
  }
}