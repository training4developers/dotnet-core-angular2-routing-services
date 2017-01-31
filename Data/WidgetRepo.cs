using System.Collections.Generic;
using System.Linq;

using Training4Developers.Models;
using Training4Developers.Interfaces;

using WidgetData = Training4Developers.Data.Models.Widget;

namespace Training4Developers.Data
{
  public class WidgetRepo: IWidgetRepo
  {
    private readonly ApplicationDbContext _dbContext;

    public WidgetRepo(ApplicationDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    public IEnumerable<IWidget> GetAll() {
      return _dbContext.Widgets.Select(w => new Widget {
        Id = w.Id,
        Name = w.Name,
        Description = w.Description,
        Color = w.Color,
        Size = w.Size,
        Quantity = w.Quantity,
        Price = w.Price
      });
    }
  }
}