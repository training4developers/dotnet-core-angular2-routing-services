using System.Collections.Generic;
using System.Linq;

using Training4Developers.Models;
using Training4Developers.Interfaces;

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

    public IWidget Get(int id) {
      // find a single widget, and ensure only a single widget is returned
      return _dbContext.Widgets.Where(w => w.Id == id).Select(w => new Widget {
        Id = w.Id,
        Name = w.Name,
        Description = w.Description,
        Color = w.Color,
        Size = w.Size,
        Quantity = w.Quantity,
        Price = w.Price
      }).SingleOrDefault();        
    }
  }
}