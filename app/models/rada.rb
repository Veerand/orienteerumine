class Rada < ActiveRecord::Base
    self.table_name = 'rada'
	has_many :punkt
	has_many :tulemus

end
