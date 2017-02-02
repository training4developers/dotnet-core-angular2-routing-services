using System.Collections.Generic;

namespace Training4Developers.Interfaces
{
  public interface IWidgetRepo
  {
    IEnumerable<IWidget> GetAll();
    
    IWidget Get(int id);
  }
}