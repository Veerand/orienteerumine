class ResultsController < ApplicationController
	def index
		@tulemus=Tulemus.joins(:rada).select('tulemus.id,tulemus.aeg,tulemus.kasutaja_id,tulemus.punktid,rada.nimi as rada_id').all
		@rada=Rada.all
	end
end
