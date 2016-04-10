class Punkt < ActiveRecord::Base
    self.table_name = 'punkt'
	belongs_to :rada

end
